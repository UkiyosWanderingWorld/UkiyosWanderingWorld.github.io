'use client';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 50) {
        setHidden(true); // scrolling down ig
      } else {
        setHidden(false); // scrolling up fr fr
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
   <header className={`fixed top-0 left-0 w-full bg-gray-50 text-xl font-mono px-4 py-2 z-50 transition-transform duration-300 ${
    hidden ? '-translate-y-full' : 'translate-y-0'
   }`}>
      <div className="max-w-6xl mx-auto flex px-4 py-4 items-center justify-between md:justify-between">
        <a href="/" className="order-2">Ukiyo</a>
        <button
          className="md:hidden order-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav 
          className={`
            transition-all duration-300 ease-in-out overflow-hidden
            absolute top-full left-0 w-full bg-gray-50 px-4 py-2 md:static md:flex flex-col space-y-1 md:w-auto md:p-0 group
            ${menuOpen ? 'max-h-40 py-2' : 'max-h-0 py-0'} 
        `}>
          {[
            ['thoughts', '/thoughts'],
            ['about', '/about'],
            ['contact', '/contact'],
          ].map(([label, href]) => (
            <a 
                key={href}
                href={href}
                className="transition-colors duration-300 text-gray-800 block py-1 group-hover:text-gray-400 hover:!text-gray-800">
                {label}
            </a>
          ))}
        </nav>
        <main className="sm:hidden flex-2"></main>
      </div>
    </header>
  );
}
