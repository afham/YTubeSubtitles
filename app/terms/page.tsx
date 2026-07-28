import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — YTube Subtitles",
  description:
    "Read the terms and conditions for using YTube Subtitles web downloader service.",
  alternates: {
    canonical: "https://ytubesubtitles.com/terms",
  },
};

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            Effective Date: January 2026
          </p>
        </div>

        {/* Content */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-xl p-6 sm:p-8 space-y-6 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using <strong>YTube Subtitles</strong>, you agree
              to comply with and be bound by these Terms of Service. If you do
              not agree with any part of these terms, you should immediately
              discontinue use of the website.
            </p>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              2. Permitted Use & Copyright Compliance
            </h2>
            <p>
              YTube Subtitles is intended solely for personal, educational,
              research, and non-commercial utility purposes (e.g., transcribing
              notes, accessibility support). Users are solely responsible for
              ensuring that their download and use of video transcripts complies
              with third-party intellectual property laws and YouTube's Terms of
              Service.
            </p>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              3. Service Availability & Modification
            </h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect
              of the service at any time without prior notice. We do not
              guarantee uninterrupted access or error-free parsing performance,
              as external API dependencies may change.
            </p>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              4. Limitation of Liability
            </h2>
            <p>
              YTube Subtitles and its maintainers shall not be liable for any
              damages resulting from the use or inability to use this web
              utility or any content retrieved through it.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
