import { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Quiz',
  description: 'Pet проект с использованием Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
