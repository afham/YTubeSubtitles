// app/api/subtitles/download/route.ts

import { NextRequest, NextResponse } from "next/server";
import { YoutubeTranscript } from "youtube-transcript";

interface SubtitleCue {
  start: number;
  duration: number;
  text: string;
}

function extractVideoId(urlOrId: string): string | null {
  if (!urlOrId) return null;
  if (urlOrId.length === 11 && !urlOrId.includes("/")) return urlOrId;
  const match = urlOrId.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/,
  );
  return match ? match[1] : null;
}

function formatTimeSRT(seconds: number): string {
  const totalMs = Math.round(seconds * 1000);
  const ms = Math.floor(totalMs % 1000)
    .toString()
    .padStart(3, "0");
  const totalSeconds = Math.floor(totalMs / 1000);
  const ss = (totalSeconds % 60).toString().padStart(2, "0");
  const mm = Math.floor((totalSeconds / 60) % 60)
    .toString()
    .padStart(2, "0");
  const hh = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, "0");
  return `${hh}:${mm}:${ss},${ms}`;
}

function formatTimeVTT(seconds: number): string {
  return formatTimeSRT(seconds).replace(",", ".");
}

function convertCuesToFormat(cues: SubtitleCue[], format: string): string {
  if (!cues || cues.length === 0) {
    return "";
  }

  const ext = format.toLowerCase();

  if (ext === "json") {
    return JSON.stringify(cues, null, 2);
  }

  if (ext === "txt") {
    return cues.map((c) => c.text).join("\n");
  }

  if (ext === "srt") {
    return cues
      .map((cue, idx) => {
        const start = formatTimeSRT(cue.start);
        const end = formatTimeSRT(cue.start + cue.duration);
        return `${idx + 1}\n${start} --> ${end}\n${cue.text}\n`;
      })
      .join("\n");
  }

  if (ext === "vtt") {
    const vttBody = cues
      .map((cue) => {
        const start = formatTimeVTT(cue.start);
        const end = formatTimeVTT(cue.start + cue.duration);
        return `${start} --> ${end}\n${cue.text}`;
      })
      .join("\n\n");
    return `WEBVTT\n\n${vttBody}`;
  }

  return cues.map((c) => c.text).join("\n");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { videoUrl, langCode, ext, videoTitle } = body;

    const videoId = extractVideoId(videoUrl);

    if (!videoId) {
      return NextResponse.json(
        { error: "Invalid YouTube Video ID or URL" },
        { status: 400 },
      );
    }

    let cues: SubtitleCue[] = [];

    try {
      const rawTranscript = await YoutubeTranscript.fetchTranscript(videoId, {
        lang: langCode || "en",
      });

      cues = rawTranscript.map((item) => ({
        start: item.offset / 1000,
        duration: item.duration / 1000,
        text: item.text
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&#39;/g, "'")
          .replace(/&quot;/g, '"')
          .trim(),
      }));
    } catch (e: any) {
      // If requested language failed, try generic default fetch
      try {
        const fallbackTranscript =
          await YoutubeTranscript.fetchTranscript(videoId);
        cues = fallbackTranscript.map((item) => ({
          start: item.offset / 1000,
          duration: item.duration / 1000,
          text: item.text.replace(/&amp;/g, "&").replace(/&#39;/g, "'").trim(),
        }));
      } catch (fallbackErr: any) {
        console.error("Transcript fetch error:", fallbackErr.message);
      }
    }

    if (cues.length === 0) {
      return NextResponse.json(
        { error: `No subtitle cues found for language "${langCode}".` },
        { status: 444 },
      );
    }

    const content = convertCuesToFormat(cues, ext || "srt");

    const safeTitle = (videoTitle || videoId).replace(/[^a-zA-Z0-9_-]/g, "_");
    const filename = `${safeTitle}_${langCode}.${ext || "srt"}`;

    const headers = new Headers();
    headers.set("Content-Type", "application/octet-stream; charset=utf-8");
    headers.set(
      "Content-Disposition",
      `attachment; filename="${encodeURIComponent(filename)}"`,
    );

    return new NextResponse(content, {
      status: 200,
      headers,
    });
  } catch (error: any) {
    console.error("Download endpoint error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to download subtitle track" },
      { status: 500 },
    );
  }
}
