export type PostMeta = {
  title?: string;
  date?: string;
  postNumber?: string;
  excerpt?: string;
  thumbnail?: string;
  heroImage?: string;
  [key: string]: any;
};

export type Post = {
  slug: string;
  frontmatter: PostMeta;
  content: string;
};
