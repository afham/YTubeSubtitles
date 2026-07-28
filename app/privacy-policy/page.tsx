import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — YTube Subtitles",
  description:
    "Learn about our privacy policies, cookie usage, data handling, and third-party ad network policies at YTube Subtitles.",
  alternates: {
    canonical: "https://ytubesubtitles.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            Last Updated: January 2026
          </p>
        </div>

        {/* Content */}
        <section className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-xl p-6 sm:p-8 space-y-6 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
          <div>
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              1. Overview
            </h2>
            <p>
              At <strong>YTube Subtitles</strong> (accessible from
              ytubesubtitles.com), one of our main priorities is the privacy of
              our visitors. This Privacy Policy document outlines the types of
              information collected and how it is used.
            </p>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              2. Information We Do Not Collect
            </h2>
            <p>
              We do not require users to create an account, log in, or provide
              personal identifiable information (PII) such as names, email
              addresses, or phone numbers to use our service. Furthermore, we do
              not store processed YouTube video URLs or extracted transcript
              text files on our servers.
            </p>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              3. Log Files & Analytics
            </h2>
            <p>
              YTube Subtitles follows standard procedures for using log files
              and server-side metrics. These files record standard metadata when
              visitors browse websites (such as browser type, IP address, ISP,
              timestamp, and referring pages). This information is purely used
              for system health monitoring, performance optimization, and server
              security.
            </p>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              4. Cookies and Advertising (Google AdSense)
            </h2>
            <p className="mb-3">
              Third-party vendors, including Google, use cookies to serve ads
              based on a user's prior visits to our website or other websites on
              the internet.
            </p>
            <ul className="list-disc list-inside space-y-2 text-xs">
              <li>
                Google's use of advertising cookies enables it and its partners
                to serve ads to users based on their visit to our site and/or
                other sites on the Internet.
              </li>
              <li>
                Users may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Google Ad Settings
                </a>{" "}
                or{" "}
                <a
                  href="https://www.aboutads.info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  aboutads.info
                </a>
                .
              </li>
            </ul>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-6">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
              5. Contact Us
            </h2>
            <p>
              If you have additional questions or require more information about
              our Privacy Policy, feel free to contact us via our{" "}
              <Link href="/contact" className="text-blue-600 underline">
                Contact Page
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
