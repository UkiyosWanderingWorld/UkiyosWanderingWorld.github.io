import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({slug: slug}));
}

export const dynamic = 'force-static';

interface Props {
  params: {
    slug: string
  }
}

export default function PostPage({ params }: Props ) {
  const { slug } = params;

  try {
    const post = getPostBySlug(slug);
    return (
        <main className="pt-20 px-4 text-gray-800">
          <article className="pt-20 max-w-3xl mx-auto space-y-8">
            <header className="space-y-2">
              <h1 className="text-2xl font-light leading-tight">
                {post.frontmatter.title}
              </h1>
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {post.frontmatter.date}
              </div>
            </header>
            
            <div className="prose prose-sm sm:prose-base prose-neutral">
              <MDXRemote source={post.content} />
            </div>
          </article>
        </main>
    );
  } catch (error) {
    notFound();
  }
}
