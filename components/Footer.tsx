'use client';

export default function Footer() {
  return (
    <footer className="mt-20 px-4 py-8 text-xs text-gray-500 font-mono">
      <div className="max-w-6xl mx-auto flex justify-between">
        <span>Ukiyo's Wandering World &copy; {new Date().getFullYear()} - Made Using GitHub Pages</span>
        <span>
        <a href="#privacy">Privacy policy</a> | <a href="https://github.com/UkiyosWanderingWorld">GitHub</a>
        </span>
      </div>
    </footer>
  );
}
