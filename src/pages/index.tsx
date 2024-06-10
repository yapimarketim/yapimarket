import Head from "next/head";
import Header from "@/components/Header/Header";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Stats from "@/components/Stats/Stats";
import Products from "@/components/Products/Products";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";
import BootstrapProvider from "@/helpers/providers/bootstrap-providers";

export default function HomePage() {
  return (
    <>
      <BootstrapProvider>
        <Head>
          <title>Yapı Market</title>
          <meta
            name="yapı market satış"
            content="Yapı market armitür satış alış ev gereçleri malzeme tedarik satışı"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <HomeBanner />
        <About />
        <Products />
        <Services />
        <Stats />
        <Testimonials />
        <Footer />
      </BootstrapProvider>
    </>
  );
}
