import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getAllPosts} from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  return (
<main className="pt-24 px-4 max-w-6xl mx-auto space-y-32">
  {posts.map((post, i) => (
    <div
      key={post.slug}
      className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
    >
      {/* IMAGE BLOCK */}
      <div
        className={`
          md:col-span-6 
          ${i % 2 === 0 ? 'order-1' : 'md:order-2'}
        `}
      >
        <img
          src={post.frontmatter.thumbnail || '/placeholder.jpg'}
          alt={post.frontmatter.title}
          className="w-full h-auto rounded-lg object-cover shadow-md aspect-video"
        />
      </div>

      {/* TEXT BLOCK */}
      <div
        className={`
          md:col-span-6 flex flex-col justify-between 
          ${i % 2 === 0 ? 'order-2' : 'md:order-1'}
        `}
      >
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          {post.frontmatter.date || '—'}
        </div>
        <a href={`/thoughts/${post.slug}`} className="block group">
          <h2 className="text-2xl font-light leading-tight group-hover:underline">
            {post.frontmatter.title}
          </h2>
          {post.frontmatter.excerpt && (
            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              {post.frontmatter.excerpt}
            </p>
          )}
        </a>
      </div>
    </div>
  ))}
</main>
  );
}

