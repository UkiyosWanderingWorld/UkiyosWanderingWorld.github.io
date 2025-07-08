import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Image from 'next/image';

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
          <article className="max-w-3xl mx-auto space-y-8">
            {/* Hero Section with Background Image */}
            <div className="relative h-screen max-h-96 overflow-hidden">
            {/* Background Image */}
            {post.frontmatter.heroImage && (
              <div className="absolute inset-0">
                <Image
                  src={post.frontmatter.heroImage}
                  alt={post.frontmatter.title || 'Post hero image'}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/10" />
            
            {/* Fade out gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-gray-100  to-transparent" />
            </div>

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
