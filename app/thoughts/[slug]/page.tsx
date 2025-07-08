import { getPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({slug: slug}));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  return (
      <main className="pt-20 px-4 text-gray-800">
        <article className="pt-20 max-w-3xl mx-auto space-y-8">
          <header className="space-y-2">
            <h1 className="text-2xl font-light leading-tight">
              Article Title Goes Here
            </h1>
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              August 2025
            </div>
          </header>
  
          <section className="prose prose-sm sm:prose-base prose-neutral">
            <p>
              This is the opening paragraph. It should feel light, easy to read,
              and have a comfortable line height. Whitespace is doing the heavy lifting.
            </p>
  
            <p>
              When you want to emphasize something, use short, clean lines and don't overcrowd.
            </p>
  
            <h2 className="text-2xl font-light leading-tight">Subhead</h2>
  
            <p>
              Even more content here, nice and relaxed. Let your content breathe.
            </p>
          </section>
        </article>
      </main>
  );
}
