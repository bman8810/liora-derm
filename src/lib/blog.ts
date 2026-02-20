export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  excerpt: string;
  category: string;
  content: string;
  metaDescription: string;
  keywords: string[];
}

import { blogPosts } from "@/data/blog-posts";

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(
  currentSlug: string,
  limit = 2
): BlogPost[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];
  return blogPosts
    .filter(
      (p) => p.slug !== currentSlug && p.category === current.category
    )
    .slice(0, limit)
    .concat(
      blogPosts
        .filter(
          (p) => p.slug !== currentSlug && p.category !== current.category
        )
        .slice(0, limit)
    )
    .slice(0, limit);
}
