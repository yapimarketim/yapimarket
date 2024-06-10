import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PageHeader from "@/components/PageHeader/PageHeader";
import Head from "next/head";
import React from "react";

const PrivacypolicyPage = () => {
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

      <PageHeader title="Gizlilik politikası" navTitle="Gizlilik politikası" />

      <div className="container my-5">
        <h1 className="mt-5">Gizlilik Politikası</h1>
        <p className="lead">
          Bu gizlilik politikası, Yapı Market tarafından işletilen yapimarket.online web sitesinin kullanıcılarına ait kişisel verilerin nasıl
          toplandığı, kullanıldığı, korunduğu ve ifşa edildiği konularında bilgi
          sağlar. Bu politika, web sitemizi kullanarak bizimle paylaştığınız
          kişisel bilgilerinize ilişkin sorumluluklarımızı ve haklarınızı
          açıklar.
        </p>
        <hr />

        <h2 className="mt-5">Toplanan Bilgiler</h2>
        <p>
          Web sitemizi ziyaret ettiğinizde, belirli bilgiler otomatik olarak
          toplanabilir. Bu bilgiler, IP adresiniz, tarayıcı tipiniz, ziyaret
          ettiğiniz sayfalar, ziyaret süresi ve diğer benzer verileri
          içerebilir. Ayrıca, isteğe bağlı olarak adınız, e-posta adresiniz,
          telefon numaranız gibi kişisel bilgileri de bize sağlayabilirsiniz.
        </p>

        <h2 className="mt-5">Kullanım Amaçları</h2>
        <p>Toplanan kişisel bilgiler, aşağıdaki amaçlar için kullanılabilir:</p>
        <ul>
          <li>
            Size sunduğumuz hizmetleri sağlamak, geliştirmek ve iyileştirmek
          </li>
          <li>İlgili ürünler veya hizmetler hakkında size bilgi vermek</li>
          <li>Sizden gelen talepleri işlemek ve yanıtlamak</li>
          <li>Web sitemizin güvenliğini sağlamak</li>
        </ul>

        <h2 className="mt-5">Kişisel Verilerin Korunması</h2>
        <p>
          Biz, topladığımız kişisel verilerin güvenliğini sağlamak için uygun
          teknik ve organizasyonel önlemleri alırız. Ancak, İnternet üzerinden
          veri iletiminin veya depolamanın tam güvenliğini garanti edemeyiz.
        </p>

        <h2 className="mt-5">Üçüncü Taraf Paylaşımı</h2>
        <p>
          Kişisel verilerinizi üçüncü taraflarla paylaşmadan önce açık izniniz
          alınır veya yasal gereklilikler doğrultusunda paylaşım yapılır.
        </p>

        <h2 className="mt-5">Çerezler</h2>
        <p>
          Web sitemiz, çerezler aracılığıyla kullanıcı deneyimini geliştirmek
          için bilgi toplar ve depolar. Çerez kullanımı hakkında daha fazla
          bilgi için Çerez Politikamızı inceleyebilirsiniz.
        </p>

        <h2 className="mt-5">Değişiklikler</h2>
        <p>
          Bu gizlilik politikası, zaman zaman güncellenebilir. Politikadaki
          değişiklikler, web sitemizde yayınlanarak geçerlilik kazanır.
          Politikadaki değişiklikleri takip etmek sizin sorumluluğunuzdadır.
        </p>

        <h2 className="mt-5">İletişim</h2>
        <p>
          Gizlilik politikamızla ilgili herhangi bir sorunuz veya endişeniz
          varsa, lütfen bizimle iletişime geçmekten çekinmeyin.
        </p>

        <p>Son güncellenme tarihi: 14.06.2024</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacypolicyPage;
