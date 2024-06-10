import React from "react";
import { Parallax } from "react-parallax";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">

        <Parallax
          blur={0}
          bgImage="/images/home-banner.jpg"
          bgImageAlt="home banner"
          strength={100}
          className="container-fluid banner_inner d-flex"
          contentClassName="container-fluid d-flex align-items-center"
        >
          <div className="container">
            <div className="banner_content text-center">
              <span>Hayallerinizdeki Ev</span>
              <h3>
                Hayalinizdeki evin tüm ihtiyaçlarına
                <br />
                Yapı Market ile ulaşın
              </h3>
              <a className="main_btn" href="#">
                Fiyat Teklifi Alın
              </a>
            </div>
          </div>
        </Parallax>
     
    </section>
  );
};

export default HomeBanner;
