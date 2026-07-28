import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — YTube Subtitles",
  description:
    "Get in touch with the YTube Subtitles team for feedback, support, or DMCA inquiries.",
  alternates: {
    canonical: "https://ytubesubtitles.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <Link
            href="/"
            className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors inline-flex items-center gap-1 mb-6"
          >
            ← Back to Downloader
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Contact Us
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Have a question, feedback, or technical issue? We'd love to hear
            from you.
          </p>
        </div>

        {/* Info & Email Box */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center font-semibold text-lg shrink-0">
              ✉️
            </div>
            <div>
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Direct Email Inquiries
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                For general support, bug reports, feature suggestions, or
                legal/DMCA notifications, please email us directly at:
              </p>
              <a
                href="mailto:support@ytubesubtitles.com"
                className="inline-block mt-3 text-sm font-semibold text-red-600 dark:text-red-400 hover:underline"
              >
                support@ytubesubtitles.com
              </a>
            </div>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6 text-xs text-zinc-500 dark:text-zinc-400 space-y-2">
            <h3 className="font-semibold text-zinc-800 dark:text-zinc-200">
              Response Times
            </h3>
            <p>
              We typically review and respond to inquiries within 24 to 48
              business hours.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
