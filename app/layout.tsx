export const metadata = {
  title: 'My Blog',
  description: 'A modern blog built with Next.js',
};

import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 flex flex-col min-h-screen">
        <Nav />
        <main className='flex-1 pt-14'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
