import type { MetadataRoute } from "next";
import { getCaseStudies, getPosts, siteUrl } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const now = new Date();

  const staticRoutes = ["", "/work", "/about", "/case-studies"].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
  }));

  const work = getCaseStudies().map((study) => ({
    url: `${base}/work/${study.slug}`,
    lastModified: now,
  }));

  const posts = getPosts().map((post) => ({
    url: `${base}/case-studies/${post.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...work, ...posts];
}
