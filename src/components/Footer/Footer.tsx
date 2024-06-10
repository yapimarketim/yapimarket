import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="footer-area ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4  col-md-6">
            <div className="single-footer-widget">
              <h6>Faydalı Linkler</h6>
              <div className="row">
                <div className="col-lg-6">
                  <ul className="footer-nav">
                    <li>
                      <i className="ti-angle-right"></i>
                      <Link href="/">Anasayfa</Link>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <Link href="/about-us">Hakkımızda</Link>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <Link href="/products">Ürünlerimiz</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="footer-nav">
                    <li>
                      <i className="ti-angle-right"></i>
                      <Link href="/services">Hizmetlerimiz</Link>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <a href="/terms-and-conditions">şartlar ve koşullar</a>
                    </li>
                    <li>
                      <i className="ti-angle-right"></i>
                      <Link href="/contact">Bize Ulaşın</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-md-6">
            <div className="single-footer-widget mail-chimp">
              <h6 className="mb-20">Çalışma Saatleri</h6>
              <ul className="business-hour">
                <li>
                  Pazartesi - Cuma : <span>9:00 - 18:00</span>{" "}
                </li>
                <li>
                  Cumartesi :<span>9:00 - 16:00</span>
                </li>
                <li>
                  Pazar :<span>Kapalı</span>
                </li>
              </ul>
              <p>Resmi tatillerde hizmet vermekteyiz!</p>
            </div>
          </div>
          <div className="col-lg-4  col-md-12">
            <div className="single-footer-widget newsletter">
              <h6>Size Ulaşalım</h6>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="form-inline"
                >
                  <div className="form-group row no-gutters">
                    <div className="col-lg-8 col-md-8 col-7">
                      <input
                        name="EMAIL"
                        placeholder="Email Adresinizi Giriniz."
                        required={true}
                        type="email"
                      />
                    </div>
                    <div className="col-lg-4 col-md-4 col-5">
                      <button className="nw-btn main_btn circle">
                        Gönder
                        <span className="lnr lnr-arrow-right"></span>
                      </button>
                    </div>
                  </div>
                  <div className="info"></div>
                </form>
              </div>
              <p>
                Mail adresinizi bizimle paylaşmanız durumunda 1 iş günü
                içerisinde size ulaşalım.
              </p>
              <Link className="footer-link" href="/privacy-policy">
                Gizlilik Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row ">
            <p className="col-lg-12 footer-text ">
              Copyright &copy; 2024 All rights reserved | This template is made
              with <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Kerti & Balkan
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
