import Head from "next/head";
import Header from "@/components/Header/Header";
import Products from "@/components/Products/Products";
import Footer from "@/components/Footer/Footer";
import PageHeader from "@/components/PageHeader/PageHeader";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Yapı Market</title>
        <meta name="description" content="mutfak ekipmanları ev gereçleri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader title="Ürünlerimiz" navTitle="Ürünlerimiz" />
      <Products showHeading={false} />
      <Footer />
    </>
  );
}
