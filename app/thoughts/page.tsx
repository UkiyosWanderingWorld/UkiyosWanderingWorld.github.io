import Nav from '@/components/Nav';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export default function ThoughtsPage() {
  const posts = getAllPosts();
  
  return (
    <main className="pt-10 bg-gray-100 text-gray-800">
      <section className="max-w-6xl mx-auto px-4 pt-24 grid gap-10 grid-cols-1">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </main>
  );
}
