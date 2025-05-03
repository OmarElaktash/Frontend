import "@/styles/globals.css";
import Head from 'next/head';
import { Header } from "@/components/layout/Header";
import Footer  from "@/components/footer/Footer";

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Head>
        <title>Spera Nova - Renewing Hope & Wellness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
