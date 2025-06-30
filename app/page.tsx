import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="pt-20 bg-gray-100 text-gray-800 font-mono">
      <section className="max-w-6xl mx-auto px-4 pt-24 grid gap-20 grid-cols-1">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <article key={i} className="group">
            <img
              src={`https://source.unsplash.com/random/800x600?sig=${i}`}
              alt={`Post ${i}`}
              className="w-full h-auto object-cover mb-2"
            />
            <div className="text-md uppercase tracking-wide text-gray-500">
              lorem ipsum {i}
            </div>
            <div className="text-lg font-light">lorem ipsum</div>
          </article>
        ))}
      </section>
    </main>
  );
}

