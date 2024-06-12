import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PageHeader from "@/components/PageHeader/PageHeader";
import Head from "next/head";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import productList from "@/helpers/data/product.json";

const GetAQuotePage = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCheckboxChange = (product_code: string) => {
    setSelectedProducts(prevSelected => {
      if (prevSelected.includes(product_code)) {
        return prevSelected.filter(code => code !== product_code);
      } else {
        return [...prevSelected, product_code];
      }
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      if (validateForm()) {
        emailjs
          .sendForm(
            "service_nqvgjke",
            "template_gxcgijb",
            form.current,
            "YXrS2q7U7uVKkFR2D"
          )
          .then(
            (result) => {
              Swal.fire({
                icon: "success",
                title: "E-posta Gönderildi",
                text: "E-postanız başarıyla gönderildi!",
              });
              console.log("E-posta gönderildi:", result.text);
              form.current!.reset();
              setSelectedProducts([]);
            },
            (error) => {
              Swal.fire({
                icon: "error",
                title: "E-posta Gönderme Hatası",
                text: "E-posta gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.",
              });
              console.error("E-posta gönderme hatası:", error.text);
            }
          );
      } else {
        Swal.fire({
          icon: "error",
          title: "Geçersiz Giriş",
          text: "Lütfen tüm alanları doğru doldurduğunuzdan emin olun.",
        });
      }
    }
  };

  const validateForm = (): boolean => {
    if (form.current) {
      const name = (
        form.current.elements.namedItem("name") as HTMLInputElement
      ).value.trim();
      const email = (
        form.current.elements.namedItem("email") as HTMLInputElement
      ).value.trim();
      const subject = (
        form.current.elements.namedItem("subject") as HTMLInputElement
      ).value.trim();
      const message = (
        form.current.elements.namedItem("message") as HTMLTextAreaElement
      ).value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !subject || !message) {
        return false;
      }

      if (!emailRegex.test(email)) {
        return false;
      }

      return true;
    }

    return false;
  };

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

      <PageHeader title="Fiyat Teklifi Alın" navTitle="Fiyat Teklifi Alın" />
      <div className="container my-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-8">
            <form
              ref={form}
              className="form-contact contact_form"
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="message"
                      id="message"
                      cols={30}
                      rows={9}
                      placeholder="Mesajınızı Giriniz."
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="İsminizi Giriniz."
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Mail Adresinizi Giriniz."
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Konu Belirtiniz."
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <div className="dropdown form-control">
                      <button
                        className="btn w-100 h-100 bg-transparent dropdown-toggle shadow-none d-flex align-items-center justify-content-between m-0 p-0"
                        type="button"
                        id="dropdownMenuButton"
                        onClick={toggleDropdown}
                      >
                        Fiyat Teklifi Alacağınız Ürünleri Seçiniz
                      </button>
                      <div
                        className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                        aria-labelledby="dropdownMenuButton"
                      >
                        {productList.products.map((item) => (
                          <div key={item.product_code} className="dropdown-item">
                            <input
                              type="checkbox"
                              name={item.product_code}
                              id={item.product_code}
                              value={item.product_code}
                              checked={selectedProducts.includes(item.product_code)}
                              onChange={() => handleCheckboxChange(item.product_code)}
                            />
                            <label htmlFor={item.product_code} className="ml-2">{item.product_code}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group text-center mt-3">
                <button type="submit" className="button button-contactForm w-50">
                  Fiyat Al
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GetAQuotePage;
