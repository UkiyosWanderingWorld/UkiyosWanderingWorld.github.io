export default function PostCard({ post }) {
  return (
    <div className="p-4 font-mono">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-sm text-gray-500">{post.date}</p>
      <p className="mt-2">{post.excerpt}</p>
      <a href={`/thoughts/${post.slug}`} className="text-blue-500 underline mt-2 inline-block">Read more</a>
    </div>
  );
}
