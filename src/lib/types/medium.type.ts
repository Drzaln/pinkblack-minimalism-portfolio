
interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
}


interface UseMediumPostsReturn {
  posts: MediumPost[];
  loading: boolean;
  error: string | null;
}