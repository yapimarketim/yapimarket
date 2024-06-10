import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-img">
              <Image width={555} height={485} src="/images/about1.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h4>
                Evinizdeki ihtiyaçlarınız için <br />
                çeşitli çözümler üretiyoruz.
                <br />
                2020 yılından beri...
              </h4>
              <p>
                Bir araya gelerek güçleniyoruz. <br />
                Biz, müşterilerimize en iyi hizmeti sunmak için buradayız.
                <br /> Hayalinizdeki evler bir telefon uzağınızda...
              </p>
              <a className="main_btn" href="#">
                Daha fazlası için
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
