import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PageHeader from "@/components/PageHeader/PageHeader";
import Head from "next/head";
import React from "react";

const TermsAndConditionsPage = () => {
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

      <PageHeader title="Şartlar ve koşullar" navTitle="Şartlar ve koşullar" />
      <div className="container my-5">
        <h1 className="mt-5">Şartlar ve Koşullar</h1>
        <p className="lead">
          Bu web sitesine giriş yaparak veya kullanarak, aşağıdaki şartları ve
          koşulları kabul etmiş olursunuz. Lütfen dikkatlice okuyunuz.
        </p>
        <hr />

        <h2 className="mt-5">1. Genel Kullanım Koşulları</h2>
        <p>
          Web sitemiz üzerinden sunulan tüm içerik ve hizmetler, kullanıcıların
          bilgilendirilmesi amacıyla sağlanmaktadır. Bu içeriklerden
          kaynaklanabilecek hatalar veya eksikliklerden dolayı herhangi bir
          sorumluluk kabul edilmemektedir.
        </p>
        <p>
          Web sitemizi kullanarak, tüm yerel yasalara, kurallara ve
          düzenlemelere uymayı kabul edersiniz. Ayrıca, web sitemizi
          başkalarının haklarını ihlal etmek veya yasadışı faaliyetlerde
          bulunmak amacıyla kullanmayacağınızı taahhüt edersiniz.
        </p>

        <h2 className="mt-5">2. Gizlilik Politikası</h2>
        <p>
          Müşteri gizliliği ve veri güvenliği bizim için önemlidir. Gizlilik
          politikamızı inceleyerek kişisel verilerinizin nasıl işlendiği ve
          korunduğu hakkında bilgi edinebilirsiniz.
        </p>

        <h2 className="mt-5">3. Ürünlerin Satışı ve İade Koşulları</h2>
        <p>
          Web sitemiz üzerinden satın alınan ürünlerin satışı ve iade koşulları
          hakkında detaylı bilgi almak için lütfen ilgili sayfaları ziyaret
          edin. İade veya değişim talepleriniz için satın alma belgesi veya
          fatura ile mağazamıza başvurmanız gerekmektedir.
        </p>

        <h2 className="mt-5">4. Fiyatlandırma ve Ödeme Koşulları</h2>
        <p>
          Web sitemizde yer alan fiyatlar değişiklik gösterebilir ve önceden
          haber verilmeksizin güncellenebilir. Lütfen satın alma işlemi yapmadan
          önce fiyatları kontrol edin. Ödeme işlemleri sırasında kullanılan tüm
          kişisel ve finansal bilgileriniz güvenli bir şekilde işlenir.
        </p>

        <h2 className="mt-5">5. Hizmetlerin Kullanımı ve Sorumluluklar</h2>
        <p>
          Web sitemizin kullanımından kaynaklanan herhangi bir sorumluluk size
          aittir. Web sitemizi kullanarak, tüm yerel yasalara, kurallara ve
          düzenlemelere uymayı kabul edersiniz.
        </p>

        <p>
          Bu şartlar ve koşulların ihlali durumunda, web sitemizin kullanımını
          kısıtlama veya engelleme hakkını saklı tutarız.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;
