import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — YTube Subtitles Downloader",
  description:
    "Learn about YTube Subtitles, a free web utility designed to help creators, researchers, and students extract YouTube video captions and transcripts easily.",
  alternates: {
    canonical: "https://ytubesubtitles.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <Link
            href="/"
            className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors inline-flex items-center gap-1 mb-6"
          >
            ← Back to Downloader
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About YTube Subtitles
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Making video transcripts accessible, structured, and easy to
            extract.
          </p>
        </div>

        {/* Content */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-xl p-6 sm:p-8 space-y-6 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              Our Mission
            </h2>
            <p>
              YTube Subtitles was built with a clear purpose: to simplify how
              users access and save video transcripts. Whether you are a student
              taking lecture notes, a video editor looking for subtitle tracks,
              or an AI researcher gathering text datasets, our tool provides a
              lightweight, instant solution without forced sign-ups or
              subscription paywalls.
            </p>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              Why Use YTube Subtitles?
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">
                  Multiple Export Formats:
                </strong>{" "}
                Extract transcripts directly into{" "}
                <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs">
                  .srt
                </code>
                ,{" "}
                <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs">
                  .vtt
                </code>
                , or plain{" "}
                <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs">
                  .txt
                </code>{" "}
                files.
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">
                  Global Language Support:
                </strong>{" "}
                Seamlessly process uploader-provided subtitles as well as
                YouTube auto-generated captions in over 100 languages.
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">
                  Privacy Focused:
                </strong>{" "}
                We do not store downloaded video or transcript content on our
                servers, ensuring user privacy and low latency.
              </li>
              <li>
                <strong className="text-zinc-800 dark:text-zinc-200">
                  Zero Limits:
                </strong>{" "}
                Completely free to use across mobile, tablet, and desktop
                devices without artificial usage caps.
              </li>
            </ul>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              How It Works
            </h2>
            <p>
              By leveraging public YouTube API metadata and caption endpoints,
              YTube Subtitles parses available subtitle tracks in real time and
              formats them into clean files ready for playback or notes.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
