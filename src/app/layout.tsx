import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'FilmRate',
  description: 'Created by Marokota',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${interSans.className} flex min-h-screen flex-col`}>
        <Header />
        <div className="flex-grow px-[50px] py-8 sm:px-[50px] md:px-[150px] lg:px-[200px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
