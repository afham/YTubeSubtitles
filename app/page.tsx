import { Metadata } from "next";
import React from "react";
import Home from "./ui/Home";
import { SeoContentBlock } from "./ui/SeoContentBlock";

export const metadata: Metadata = {
  title: "YTube Subtitles Downloader — Export YouTube Captions (VTT, SRT, TXT)",
  description:
    "Download YTube subtitles and auto-generated captions fast in VTT, SRT, or plain text format. 100% free, no login required, works on all devices.",
  keywords: [
    "ytube subtitles download",
    "ytube subtitle downloader",
    "download youtube subtitles",
    "youtube transcript downloader",
    "youtube srt downloader",
    "free youtube captions extractor",
  ],
  alternates: {
    canonical: "https://ytubesubtitles.com",
  },
  openGraph: {
    title: "Free YTube Subtitles Downloader — Export Captions Instantly",
    description:
      "Extract subtitles from any YouTube video in SRT, VTT, or plain text. Fast, free, and secure.",
    url: "https://ytubesubtitles.com",
    siteName: "YTube Subtitles",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free YTube Subtitles Downloader",
    description:
      "Download YTube subtitles & auto-captions in SRT, VTT, or plain text.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function Page() {
  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YTube Subtitles Downloader",
    url: "https://ytubesubtitles.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Free web utility to extract and download YouTube video subtitles and transcripts in VTT, SRT, and TXT formats.",
    author: {
      "@type": "Organization",
      name: "YTube Subtitles",
      url: "https://ytubesubtitles.com",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I download YouTube subtitles in SRT or VTT format?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Simply copy the YouTube video link, paste it into the search box above, and click "Fetch Subtitles". Select your preferred language and click the format button (SRT, VTT, or TXT) to download.',
        },
      },
      {
        "@type": "Question",
        name: "Can I download auto-generated captions (CC)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! YTube Subtitles automatically detects both official uploader subtitles and YouTube auto-generated captions across 100+ languages.",
        },
      },
      {
        "@type": "Question",
        name: "Is this YouTube transcript downloader free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "100% free. There are no download limits, no subscription fees, and no account registration required.",
        },
      },
      {
        "@type": "Question",
        name: "How do I copy a YouTube video transcript as plain text?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Select the TXT format option when extracting your subtitles. This converts raw subtitle timestamps into clean plain text ready for AI processing or notes.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Home />
      <SeoContentBlock />

      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-8 mt-12 text-center text-xs text-zinc-500">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} YTube Subtitles. All rights reserved.
          </p>
          <nav className="flex items-center gap-6">
            <a
              href="/about"
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              About
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              Terms of Services
            </a>
            <a
              href="/contact"
              className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
