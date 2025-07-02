import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getAllPosts} from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts(); // assume this gives you [{ slug, frontmatter, ... }]

  return (
    <main className="pt-20 px-4 max-w-6xl mx-auto space-y-16">
      {posts.map((post) => (
        <div key={post.slug} className="pt-20 grid grid-cols-12 gap-4 group">
          <div className="col-span-3 text-xs text-gray-500 uppercase tracking-wide pt-1">
            {post.frontmatter.date || '—'}
          </div>
          <div className="col-span-9">
            <a href={`/thoughts/${post.slug}`} className="block hover:underline">
              <h2 className="text-xl font-light leading-snug">
                {post.frontmatter.title}
              </h2>
            </a>
            {post.frontmatter.excerpt && (
              <p className="text-sm text-gray-600 mt-2">
                {post.frontmatter.excerpt}
              </p>
            )}
          </div>
        </div>
      ))}
    </main>
  );
}

