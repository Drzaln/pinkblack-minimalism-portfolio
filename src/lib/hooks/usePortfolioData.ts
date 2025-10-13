// lib/hooks/usePortfolioData.ts
import { useEffect, useState } from 'react';
import { Profile } from '../types/profile.types';
import { Experience } from '../types/experience.types';
import { Education } from '../types/education.types';
import { Project } from '../types/project.types';
import Parser from 'rss-parser';
import { Post } from '../types/post.types';

interface PortfolioData {
  profile: Profile | null;
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  posts: Post[];
}

interface UsePortfolioDataReturn {
  data: PortfolioData;
  loading: boolean;
  error: string | null;
}

export function usePortfolioData(): UsePortfolioDataReturn {
  const [data, setData] = useState<PortfolioData>({
    profile: null,
    experiences: [],
    educations: [],
    projects: [],
    posts: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('/api/portfolio');
        
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }

        const result = await response.json();
        
        if (result.success) {
          setData(result.data);
        } else {
          throw new Error(result.error || 'Unknown error');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}