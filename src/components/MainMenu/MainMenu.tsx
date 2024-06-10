import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const MainMenu = (props: Props) => {
  return (
    <div className="main_menu">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand logo_h" href="/">
            <Image src="/images/logo/logo.png" alt="" width={165} height={80} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse offset"
            id="navbarSupportedContent"
          >
            <ul className="nav navbar-nav menu_nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" href="/">
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about-us">
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">
                  Hizmetlerimiz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/products">
                  Ürünlerimiz
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Bize Ulaşın
                </Link>
              </li>
            </ul>
          </div>
          <div className="right-button">
            <ul>
              <li className="shop-icon">
                <Link href="/shopping-page">
                  <i className="ti-shopping-cart-full"></i>
                  <span>0</span>
                </Link>
              </li>
              <li>
                <a id="search" href="#">
                  <i className="ti-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu;
