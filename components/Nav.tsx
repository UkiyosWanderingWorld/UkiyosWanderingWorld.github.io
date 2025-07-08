'use client';
import { useEffect, useRef, useState } from 'react';

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY && currentScroll > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Ensure no soft-locks on viewport resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gray-50 z-50 transition-transform duration-300 shadow-sm ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        {/* Left side: nav links or hamburger */}
        <div className="flex items-center">
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-2xl mr-4"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6 group">
            {[
              ['thoughts', '/thoughts'],
              ['about', '/about'],
              ['contact', '/contact'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-xl text-gray-800 transition-colors duration-200 group-hover:text-gray-400 hover:!text-gray-800"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Logo (always on right) */}
        <a href="/" className="text-xl tracking-tight">
          Ukiyo
        </a>
      </div>

      {/* Mobile dropdown menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-gray-50 px-4 ${
          menuOpen ? 'max-h-40 py-2' : 'max-h-0 py-0'
        }`}
      >
        <nav className="flex flex-col space-y-2 group">
          {[
            ['thoughts', '/thoughts'],
            ['about', '/about'],
            ['contact', '/contact'],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className=" text-xl text-gray-800 transition-colors duration-200 group-hover:text-gray-400 hover:!text-gray-800"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
