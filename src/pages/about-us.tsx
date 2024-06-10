import Head from 'next/head';
import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';

export default function AboutPage() {
  return <>
  <Head>
        <title>Yapı Market</title>
        <meta name="yapı market satış" content="Yapı market armitür satış alış ev gereçleri malzeme tedarik satışı" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader />
      <About />

      <Testimonials />
  
      <Footer />
  </>
}
