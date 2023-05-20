import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import styles from './page.module.css';
import '../globals.css';


const inter = Inter({ subsets: ['latin'] });

const rootClasses = [styles.main_page, `container`].join(' ');

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
    <html lang='ru' className={styles.page}>
      <body className={styles.app}>
        <Header />
        <main className={rootClasses}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
