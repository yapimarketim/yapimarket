import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_nqvgjke", "template_gxcgijb", form.current, "YXrS2q7U7uVKkFR2D")
        .then(
          (result) => {
            console.log("E-posta gönderildi:", result.text);
          },
          (error) => {
            console.error("E-posta gönderme hatası:", error.text);
          }
        );
    }
  };

  return (
    <section className="contact-section area-padding">
      <div className="container">
        <div className="d-none d-sm-block mb-5 pb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23833.85716245098!2d-73.95454906767618!3d41.69392397071829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd3e642be0bb3b%3A0x5ea85debfb20f349!2sPoughkeepsie%2C%20NY%2C%20USA!5e0!3m2!1sen!2sph!4v1681066121731!5m2!1sen!2sph"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">İletişime Geçin</h2>
          </div>
          <div className="col-lg-8">
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
                <div className="col-12">
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
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="button button-contactForm">
                  Mesaj Gönder
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-home"></i>
              </span>
              <div className="media-body">
                <h3>İstanbul, Türkiye</h3>
                <p>Esenyurt, 322 Sokak No 28</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-tablet"></i>
              </span>
              <div className="media-body">
                <h3>
                  <a href="tel:+905350239685">+ (90) 535 - 0239685 </a>
                </h3>
                <p>Pazartesi'den Cuma'ya 09.00'dan 18.00'e kadar</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-email"></i>
              </span>
              <div className="media-body">
                <h3>
                  <a href="mailto:email@example.com">
                    email@example.com
                  </a>
                </h3>
                <p>Sorunuzu istediğiniz zaman bize gönderin!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
