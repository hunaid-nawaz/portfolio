import type { MetadataRoute } from "next";
import { getCaseStudies, getPosts, siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();

  const staticRoutes = ["", "/work", "/about", "/writing"].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
  }));

  const work = getCaseStudies().map((study) => ({
    url: `${base}/work/${study.slug}`,
    lastModified: now,
  }));

  const writing = getPosts().map((post) => ({
    url: `${base}/writing/${post.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...work, ...writing];
}
