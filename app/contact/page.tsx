import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="pt-20 bg-gray-100 text-gray-800">
      <section className="max-w-6xl mx-auto px-4 pt-24 grid gap-5 grid-cols-1">
      <h1 className="text-2xl font-light mb-4">msg me</h1>
      <p>no spam plz :-) <a href="mailto:ukiyos0wandering0world@gmail.com" className="text-blue-500">ukiyosZEROwanderingZEROworldATgmail.com</a></p>
      <p>(don't ask me why that's me address, name collisions are a problem as old as time)</p>
      </section>
    </main>
  );
}
