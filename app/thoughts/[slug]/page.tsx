import { getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  return (
    <main className="pt-20 bg-gray-100 text-gray-800">
      <section className="max-w-6xl mx-auto px-4 pt-24 grid gap-10 grid-cols-1">
      <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.frontmatter.date}</p>
      <div>{post.content}</div>
      </section>
    </main>
  );
}
