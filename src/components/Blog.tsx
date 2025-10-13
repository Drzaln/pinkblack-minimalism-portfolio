import { useMediumPosts } from "@/lib/hooks/useMediumPost";
import { Post } from "@/lib/types/post.types";
import React from "react";

interface BlogProps {
  posts: Post[];
}

const cardClass =
  "rounded-2xl border bg-white/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 backdrop-blur p-5 md:p-6";

function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  
  if (months === 0) return "Recently";
  if (months === 1) return "1 month ago";
  return `${months} months ago`;
}

export default function Blog({ posts }: BlogProps) {
  const { posts: mediumPosts, loading, error } = useMediumPosts();

  const allPosts = [
    ...mediumPosts.map(p => ({
      title: p.title,
      href: p.link,
      tags: p.categories.slice(0, 3),
      date: p.pubDate,
      source: 'medium' as const,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="blog" className="scroll-mt-24 mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">Blogs</h2>
        {loading && (
          <span className="text-sm text-zinc-500">Loading Medium posts...</span>
        )}
      </div>

      {error && (
        <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm">
          Failed to load Medium posts. Showing database posts only.
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {allPosts.map((post, idx) => (
          <a
            key={`${post.source}-${idx}`}
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${cardClass} block group`}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold group-hover:text-pink-500 flex-1">
                {post.title}
              </h3>
              {post.source === 'medium' && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20 whitespace-nowrap">
                  Medium
                </span>
              )}
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
              <span>{getTimeAgo(post.date)}</span>
              {post.tags.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}