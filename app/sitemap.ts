import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getPosts } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts().map((post) => ({
    url: `${site.url}/journal/${post.slug}`,
    lastModified: post.date ? new Date(`${post.date}T00:00:00Z`) : undefined,
  }));

  return [
    { url: site.url },
    { url: `${site.url}/projects` },
    { url: `${site.url}/journal` },
    ...posts,
  ];
}
