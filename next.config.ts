import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Instruct Vercel to bundle the binary and the cookies file into serverless functions
  outputFileTracingIncludes: {
    "/api/**/*": ["./bin/**/*", "./lib/cookies.txt"],
  },
};

export default nextConfig;
