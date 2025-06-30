import { getAllPosts } from '@/lib/posts';

export default function ArchivePage() {
  const posts = getAllPosts();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Archive</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`} className="text-blue-500">{post.frontmatter.title}</a>
            <span className="text-sm text-gray-500 ml-2">({post.frontmatter.date})</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
