import { useEffect, useState } from "react";

export function useMediumPosts(): UseMediumPostsReturn {
  const [posts, setPosts] = useState<MediumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await fetch("/api/medium");

        if (!response.ok) {
          throw new Error("Failed to fetch Medium posts");
        }

        const result = await response.json();

        if (result.success) {
          setPosts(result.data);
        } else {
          throw new Error(result.error || "Unknown error");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Medium posts error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
