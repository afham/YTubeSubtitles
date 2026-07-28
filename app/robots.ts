import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Prevents crawlers from wasting request budget on internal API routes
    },
    sitemap: "https://ytubesubtitles.com/sitemap.xml",
  };
}
