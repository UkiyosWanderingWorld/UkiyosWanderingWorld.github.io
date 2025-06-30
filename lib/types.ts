export type PostMeta = {
  title?: string;
  date?: string;
  description?: string;
  [key: string]: any;
};

export type Post = {
  slug: string;
  frontmatter: PostMeta;
  content: string;
};
