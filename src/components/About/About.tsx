import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="about-area area-padding" style={{backgroundColor:"#f6f6f6"}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="about-img">
              <Image width={555} height={485} src="/images/about1.jpg" alt="image" />
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
              <Link className="main_btn" href="/products">
                Daha fazlası için
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
