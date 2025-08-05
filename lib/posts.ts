import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/lib/types';

const postsDirectory = path.join(process.cwd(), 'content/thoughts');

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''));
}

export function getPostBySlug(slug: string) : Post {
  const fileName = path.join(postsDirectory, `${slug}.mdx`);
  try {
    if (!fs.existsSync(fileName)) {
      throw new Error(`File does not exist: ${fileName}`);
    }
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const { data, content } = matter(fileContents);

      return {
        slug,
        frontmatter: data,
        content,
      } as Post;
  } catch (error) {
    console.error('Error reading file:', error);
    throw error;
  }
}

export function getAllPosts() : Post[] {
  return getPostSlugs()
    .map(slug => getPostBySlug(slug))
    .sort((a, b) => (a.frontmatter.id < b.frontmatter.id ? 1 : -1));
}

