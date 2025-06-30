import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/lib/types';

const postsDirectory = path.join(process.cwd(), 'content/thoughts');

export function getAllPosts() : Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data,
      content,
    };
  });
}
