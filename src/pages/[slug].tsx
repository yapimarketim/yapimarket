import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PageHeader from "@/components/PageHeader/PageHeader";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import React from "react";
import productData from "@/helpers/data/product.json";
import { Product } from "@/types/Product";
import Image from "next/image";

const ProductDetailPage: React.FC = () => {
  const searchParams = useSearchParams();
  const productCode = searchParams.get("product_code");

  const products: Product[] = productData.products;

  const selectedProduct: Product | undefined = products.find(
    (item) => item.product_code === productCode
  );

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

      <PageHeader title={selectedProduct?.name} navTitle="Ürün Detayı" />

      {selectedProduct ? (
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-6">
              <Image
                src={`/images/${selectedProduct.images[0]}`}
                width={500}
                height={500}
                alt="product image"
              />
            </div>
            <div className="col-12 col-md-6">
              <table className="table">
                <tbody>
                  <tr>
                    <th scope="row">Marka</th>
                    <td>Vitra</td>
                  </tr>
                  <tr>
                    <th scope="row">Ürün Kodu</th>
                    <td>VT12345</td>
                  </tr>
                  <tr>
                    <th scope="row">Ürün Adı</th>
                    <td>Vitra Musluk Bataryası</td>
                  </tr>
                  <tr>
                    <th scope="row">Malzeme</th>
                    <td>Pirinç</td>
                  </tr>
                  <tr>
                    <th scope="row">Renk</th>
                    <td>Krom</td>
                  </tr>
                  <tr>
                    <th scope="row">Tip</th>
                    <td>Lavabo Bataryası</td>
                  </tr>
                  <tr>
                    <th scope="row">Montaj Tipi</th>
                    <td>Tezgah Üstü</td>
                  </tr>
                  <tr>
                    <th scope="row">Yükseklik</th>
                    <td>150mm</td>
                  </tr>
                  <tr>
                    <th scope="row">Ağız Uzunluğu</th>
                    <td>120mm</td>
                  </tr>
                  <tr>
                    <th scope="row">Akış Hızı</th>
                    <td>6 L/dak</td>
                  </tr>
                  <tr>
                    <th scope="row">Garanti</th>
                    <td>5 Yıl</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p>Ürün bulunamadı.</p>
      )}

      <Footer />
    </>
  );
};

export default ProductDetailPage;
