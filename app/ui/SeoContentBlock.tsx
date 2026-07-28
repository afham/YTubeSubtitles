import React from "react";

export function SeoContentBlock() {
  const faqs = [
    {
      question: "How do I download YouTube subtitles in SRT or VTT format?",
      answer:
        'Simply copy the YouTube video link, paste it into the search box above, and click "Fetch Subtitles". Select your preferred language and click the format button (SRT, VTT, or TXT) to download the caption file instantly.',
    },
    {
      question: "Can I download auto-generated captions (CC)?",
      answer:
        "Yes! YTube Subtitles automatically detects both official uploader subtitles and YouTube auto-generated captions across 100+ languages.",
    },
    {
      question: "Is this YouTube transcript downloader free to use?",
      answer:
        "100% free. There are no download limits, no subscription fees, and no account registration required.",
    },
    {
      question: "How do I copy a YouTube video transcript as plain text?",
      answer:
        "Select the TXT format option when extracting your subtitles. This converts raw subtitle timestamps into clean, formatted plain text ready to copy into ChatGPT, Claude, or Word documents.",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-8 py-12 text-zinc-700 dark:text-zinc-300 flex flex-col gap-12">
      {/* 1. Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200/80 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-lg bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 flex items-center justify-center font-bold mb-4 text-lg">
            .srt
          </div>
          <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1.5">
            Multiple Export Formats
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Export video captions in{" "}
            <strong className="text-zinc-700 dark:text-zinc-300">SRT</strong>,{" "}
            <strong className="text-zinc-700 dark:text-zinc-300">VTT</strong>,
            or clean{" "}
            <strong className="text-zinc-700 dark:text-zinc-300">TXT</strong>{" "}
            plain text formats.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200/80 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mb-4 text-lg">
            100+
          </div>
          <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1.5">
            Global Language Support
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Extract native uploader captions and YouTube auto-generated captions
            across 100+ global languages seamlessly.
          </p>
        </div>

        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200/80 dark:border-zinc-800">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold mb-4 text-lg">
            ⚡
          </div>
          <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 mb-1.5">
            No Limits or Signup
          </h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Fast, secure, and completely free subtitle downloader with zero
            daily restrictions or account sign-ups.
          </p>
        </div>
      </div>

      {/* 2. SEO Explanatory Article */}
      <article className="prose dark:prose-invert max-w-none bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-xl border border-zinc-200/80 dark:border-zinc-800 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-3">
          Free YouTube Subtitles & Transcript Downloader
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
          Looking for a fast, reliable way to extract captions from YouTube
          videos? <strong>YTube Subtitles Downloader</strong> allows you to
          convert and save video transcripts directly to your computer or mobile
          device in seconds. Whether you need an <em>SRT file</em> for video
          editing, a <em>VTT track</em> for web video players, or a{" "}
          <em>plain text document</em> to summarize with AI tools like ChatGPT
          or Claude, our subtitle extractor handles it all effortlessly.
        </p>

        <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-3">
          How to Download Subtitles from YouTube
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <li>
            <strong className="text-zinc-800 dark:text-zinc-200">
              Copy Video Link:
            </strong>{" "}
            Open YouTube and copy the URL of the video you want captions from.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-200">
              Paste URL:
            </strong>{" "}
            Enter the link into the input field at the top of this page.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-200">
              Select Language & Format:
            </strong>{" "}
            Choose from available official or auto-generated subtitle tracks.
          </li>
          <li>
            <strong className="text-zinc-800 dark:text-zinc-200">
              Download File:
            </strong>{" "}
            Save your transcript directly as an{" "}
            <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs">
              .srt
            </code>
            ,{" "}
            <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs">
              .vtt
            </code>
            , or{" "}
            <code className="bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded text-xs">
              .txt
            </code>{" "}
            file.
          </li>
        </ol>
      </article>

      {/* 3. FAQ Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-zinc-200/80 dark:border-zinc-800 [&_summary::-webkit-details-marker]:hidden transition-all"
            >
              <summary className="flex items-center justify-between font-semibold text-sm cursor-pointer text-zinc-900 dark:text-zinc-100 select-none">
                <span>{faq.question}</span>
                <span className="transition-transform group-open:rotate-180 text-zinc-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800/60 pt-3">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
