import { execSync } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import os from "os";

// Initialize youtube-dl-exec
const { create: createYoutubeDl } = require("youtube-dl-exec");

// Determine binary name dynamically based on OS
const binaryName = process.platform === "win32" ? "yt-dlp.exe" : "yt-dlp_linux";
const absoluteBinaryPath = path.join(process.cwd(), "bin", binaryName);

// Set execution permissions on Linux/Vercel
if (process.platform !== "win32" && fs.existsSync(absoluteBinaryPath)) {
  try {
    execSync(`chmod +x "${absoluteBinaryPath}"`);
  } catch (err) {
    console.warn("Could not set chmod execution permission on binary:", err);
  }
}

const youtubedl = createYoutubeDl(absoluteBinaryPath);

interface DownloadRequestBody {
  videoUrl: string;
  langCode: string;
  ext?: string;
  isAuto?: boolean;
  videoTitle?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  // Declare tempDir in outer scope so it's accessible in the finally block
  let tempDir: string | null = null;

  try {
    const {
      videoUrl,
      langCode,
      ext = "vtt",
      isAuto = false,
      videoTitle = "subtitle",
    } = (await request.json()) as DownloadRequestBody;

    if (!videoUrl || !langCode) {
      return NextResponse.json(
        { error: "videoUrl and langCode are required" },
        { status: 400 },
      );
    }

    // 1. Create a unique temporary directory in OS temp space
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "yt-sub-"));
    const outputTemplate = path.join(tempDir, "sub");

    // 2. Prepare writable cookie file in /tmp
    const sourceCookiePath = path.join(process.cwd(), "lib", "cookies.txt");
    const writableCookiePath = path.join("/tmp", "cookies.txt");

    if (fs.existsSync(sourceCookiePath)) {
      fs.copyFileSync(sourceCookiePath, writableCookiePath);
    } else if (process.env.YOUTUBE_COOKIES_TXT) {
      fs.writeFileSync(writableCookiePath, process.env.YOUTUBE_COOKIES_TXT);
    }

    // 3. Create a 15-second AbortController signal
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    // 4. Configure options for subtitle downloading
    const options: Record<string, any> = {
      writeSub: !isAuto,
      writeAutoSub: isAuto,
      subLangs: langCode,
      subFormat: ext,
      skipDownload: true,
      ignoreNoFormatsError: true, // Prevents format check failures when downloading subs
      forceIpv4: true,
      sleepSubtitles: 2,
      output: outputTemplate,
      noWarnings: true,
      noCheckCertificates: true,
      cookies: writableCookiePath, // Pass the writable /tmp cookie file
      extractorArgs: "youtube:player_client=android_vr,tv_downgraded,mweb", // Bypass bot challenges
    };

    // 5. Call yt-dlp pointing output to tempDir
    await youtubedl(videoUrl, options, {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    // 6. Find the downloaded subtitle file inside the temp folder
    const files = fs.readdirSync(tempDir);
    const subtitleFilename = files.find(
      (f) => f.endsWith(`.${ext}`) || f.includes(`.${langCode}.`),
    );

    if (!subtitleFilename) {
      return NextResponse.json(
        { error: "Subtitle content empty or not found" },
        { status: 404 },
      );
    }

    // 7. Read the content of the file directly into memory
    const filePath = path.join(tempDir, subtitleFilename);
    const subtitleContent = fs.readFileSync(filePath, "utf-8");

    const safeTitle = videoTitle.replace(/[^a-zA-Z0-9_-]/g, "_");
    const filename = `${safeTitle}_${langCode}.${ext}`;

    // 8. Stream the string response back to the client
    return new NextResponse(subtitleContent, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error("Subtitle Download Error:", error);

    return NextResponse.json(
      { error: "Failed to process subtitle download via yt-dlp" },
      { status: 500 },
    );
  } finally {
    // 9. Automatically delete the temp folder and contents after reading
    if (tempDir && fs.existsSync(tempDir)) {
      try {
        fs.rmSync(tempDir, { recursive: true, force: true });
      } catch (cleanupError) {
        console.error("Error removing temp folder:", cleanupError);
      }
    }
  }
}
