import Head from "next/head";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/PageHeader/PageHeader";
import ContactUs from "@/components/ContactUs/ContactUs";

export default function ContactPage() {
  return (
    <>
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

      <PageHeader title="Bize Ulaşın" navTitle="Bize Ulaşın" />

      <ContactUs />

      <Footer />
    </>
  );
}
