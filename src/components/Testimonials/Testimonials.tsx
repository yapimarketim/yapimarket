import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

type Props = {};

const Testimonials = (props: Props) => {
  const carouselConfig = {
    merge: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    center: false,
    dots: true,
    navText: [
      '<i className="fa fa-long-arrow-left"></i> Prev',
      'Next <i className="fa fa-long-arrow-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };

  return (
    <section className="testimonial-area area-padding">
      <div className="container">
        <div className="area-heading">
          <h3 className="line">Müşteri Yorumları</h3>
          <p>Mutlu müşterilerimizin bizlere dönüşleri.</p>
        </div>
        <div className="row">
          <OwlCarousel
            className="active-testimonial-carusel owl-carousel"
            {...carouselConfig}
          >
            <div className="single-testimonial item d-flex flex-row">
              <div className="thumb">
                <Image
                  width={91}
                  height={91}
                  className="img-fluid"
                  src="/images/tes1.jpg.webp"
                  alt=""
                />
              </div>
              <div className="desc">
                <h4>Erman BALKAN</h4>
                <p className="designation">Müşteri</p>
                <p>
                  Ürünler tam zamanında elime ulaştı. Kargolama ve göstermiş
                  olduğunuz özen için teşekkür ederim. Bir sonraki alışverişimde
                  de ilk adresim yapı market.
                </p>
              </div>
            </div>
            <div className="single-testimonial item d-flex flex-row">
              <div className="thumb">
                <Image
                  width={91}
                  height={91}
                  className="img-fluid"
                  src="/images/tex2.jpg.webp"
                  alt=""
                />
              </div>
              <div className="desc">
                <h4>Enis KERTİ</h4>
                <p className="designation">Müşteri Temsilcisi</p>
                <p>
                  Ürünler tam zamanında elime ulaştı. Kargolama ve göstermiş
                  olduğunuz özen için teşekkür ederim. Bir sonraki alışverişimde
                  de ilk adresim yapı market.
                </p>
              </div>
            </div>
            <div className="single-testimonial item d-flex flex-row">
              <div className="thumb">
                <Image
                  width={91}
                  height={91}
                  className="img-fluid"
                  src="/images/tes1.jpg.webp"
                  alt=""
                />
              </div>
              <div className="desc">
                <h4>Hasan DEMİRCİ</h4>
                <p className="designation">Müşteri</p>
                <p>
                  Ürünler tam zamanında elime ulaştı. Kargolama ve göstermiş
                  olduğunuz özen için teşekkür ederim. Bir sonraki alışverişimde
                  de ilk adresim yapı market.
                </p>
              </div>
            </div>
            <div className="single-testimonial item d-flex flex-row">
              <div className="thumb">
                <Image
                  width={91}
                  height={91}
                  className="img-fluid"
                  src="/images/tex2.jpg.webp"
                  alt=""
                />
              </div>
              <div className="desc">
                <h4>İbrahim YURTSEVEN</h4>
                <p className="designation">Müşteri</p>
                <p>
                  Ürünler tam zamanında elime ulaştı. Kargolama ve göstermiş
                  olduğunuz özen için teşekkür ederim. Bir sonraki alışverişimde
                  de ilk adresim yapı market.
                </p>
              </div>
            </div>
            <div className="single-testimonial item d-flex flex-row">
              <div className="thumb">
                <Image
                  width={91}
                  height={91}
                  className="img-fluid"
                  src="/images/tes1.jpg.webp"
                  alt=""
                />
              </div>
              <div className="desc">
                <h4>Mustafa KÜÇÜK</h4>
                <p className="designation">Müşteri</p>
                <p>
                  Ürünler tam zamanında elime ulaştı. Kargolama ve göstermiş
                  olduğunuz özen için teşekkür ederim. Bir sonraki alışverişimde
                  de ilk adresim yapı market.
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
