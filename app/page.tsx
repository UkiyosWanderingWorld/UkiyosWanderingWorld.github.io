import { getAllPosts} from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  return (
<main className="mt-40 sm-20 px-4 max-w-6xl mx-auto space-y-32">
  {posts.map((post, i) => (
    <div
      key={post.slug}
      className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
    >
      <div
        className={`
          md:col-span-6 
          ${i % 2 === 0 ? 'order-1' : 'md:order-2'}
        `}
      >
        <a
          href={`/thoughts/${post.slug}`}
          className="block group relative"
        >
        <img
          src={post.frontmatter.thumbnail || '/images/placeholder.jpg'}
          alt={post.frontmatter.title}
          loading="lazy"
          className="w-full h-auto rounded-lg object-cover aspect-[3/2] opacity-80 hover:opacity-100 transition-opacity duration-500 "
        />
        </a>
      </div>
      <div
        className={`
          md:col-span-6 flex flex-col justify-between 
          ${i % 2 === 0 ? 'order-2' : 'md:order-1'}
        `}
      >
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
          {post.frontmatter.date || '—'}
        </div>
        <a
          href={`/thoughts/${post.slug}`}
          className="block group relative"
        >
          <h2 className="text-2xl font-light leading-tight flex items-center gap-2">
            {post.frontmatter.title}
            <span
              className="opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              aria-hidden="true"
            >
              →
            </span>
          </h2>
        </a>
      </div>
    </div>
  ))}
</main>
  );
}

