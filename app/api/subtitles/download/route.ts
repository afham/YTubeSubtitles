import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import os from "os";

// Initialize youtube-dl-exec
const { create: createYoutubeDl } = require("youtube-dl-exec");
const absoluteBinaryPath = path.join(process.cwd(), "bin", "yt-dlp_linux");
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

    // 1. Create a 12-second AbortController signal
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    // 2. Call yt-dlp pointing output to tempDir instead of stdout (-)
    await youtubedl(
      videoUrl,
      {
        writeSub: !isAuto,
        writeAutoSub: isAuto,
        subLangs: langCode,
        subFormat: ext,
        skipDownload: true,
        forceIpv4: true,
        sleepSubtitles: 5,
        output: outputTemplate, // Output template: C:\Users\...\Temp\yt-sub-xxx\sub
        noWarnings: true,
        noCheckCertificates: true,
      },
      {
        signal: controller.signal, // Kills yt-dlp if it takes longer than 12s
      },
    );

    clearTimeout(timeoutId);

    // 3. Find the downloaded subtitle file inside the temp folder
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

    // 4. Read the content of the file directly into memory
    const filePath = path.join(tempDir, subtitleFilename);
    const subtitleContent = fs.readFileSync(filePath, "utf-8");

    const safeTitle = videoTitle.replace(/[^a-zA-Z0-9_-]/g, "_");
    const filename = `${safeTitle}_${langCode}.${ext}`;

    // 5. Stream the string response back to the client
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
    // 6. Automatically delete the temp folder and contents after reading
    if (tempDir && fs.existsSync(tempDir)) {
      try {
        fs.rmSync(tempDir, { recursive: true, force: true });
      } catch (cleanupError) {
        console.error("Error removing temp folder:", cleanupError);
      }
    }
  }
}
