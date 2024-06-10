import Image from "next/image";
import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <section className="service-area area-padding">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">Sunabildiğimiz Çözümlerimiz</h3>
          <p>Birlikte, evleriniz için doğru ekipmanları belirleyelim.</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={92}
                  height={92}
                  src="/images/i1.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Musluk & Batarya</h5>
                <p>
                  Uzun ömürlü garanti kapsamı yüksek dayanıklı kalite belgeli ürünler
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={83}
                  height={83}
                  src="/images/i2.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Tuvalet Ekipmanları</h5>
                <p>
                  Yüksek hijyen standartlarına sahip kolay temizlenen antibakteriyel ekipmanlar
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={75}
                  height={92}
                  src="/images/i3.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Mutfak Ekipmanları</h5>
                <p>
                  Mutfakta geçireceğiniz zamanı keyifli hale getiren tasarım ekipmanlar
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="single-service">
              <div className="service-icon">
                <Image
                  width={82}
                  height={82}
                  src="/images/i4.png"
                  alt=""
                />
              </div>
              <div className="service-content">
                <h5>Banyo Ekipmanları</h5>
                <p>
                  Banyonuzda özel tasarım duş başlıkları ile kaliteli zaman geçirin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
