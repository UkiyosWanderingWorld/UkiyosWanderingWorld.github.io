import Script from 'next/script'
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="pt-20 px-4 mx-auto bg-gray-100 text-gray-800">
      <section className="max-w-6xl mx-auto px-4 pt-24 grid gap-5 grid-cols-1">
        <h1 className="text-2xl font-light mb-4">me</h1>
        <p className="text-md leading-relaxed">
          Adrift in troubled seas, these waters how they be a' churnin'!
          A witch's cauldron, the stirring spoon the wind, the waves, 
          the orbit of the Earth.
        </p>
          
        <p className="text-md leading-relaxed">
          I wrote that when I got a burst of inspiration an hour ago. In the same vein 
          the rest of this website follows. idk what im gonna do with it but
          for now i wanna write. About what, well here's some keywords:
        </p>

        <p className="text-md leading-relaxed">
          languages
        </p>

        <p className="text-md leading-relaxed">
          intelligence (the ol' hard problem)
        </p>

        <p className="text-md leading-relaxed">
          books i like
        </p>

        <p className="text-md leading-relaxed">
          cafes
        </p>

        <p className="text-md leading-relaxed">
          there's a million different things i wanna talk about but ill start 
          w that and see what happens.
        </p>

        <p className="text-sm mt-4 leading-relaxed text-gray-500">
          if you like anything u see here, feel free to buy me a coffee. it'll
          fuel more of the same, perhaps.
        </p>
        <a href="https://www.buymeacoffee.com/UkiyosWorld" >
        <img 
            src="/images/default-red.png" 
            loading="lazy" 
            alt="Buy Me A Coffee" 
            className="w-40 h-auto"/>
        </a>
      </section>
    </main>
  );
}
