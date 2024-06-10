import Image from 'next/image'
import React from 'react'

type Props = {}

const Stats = (props: Props) => {
  return (
    <section className="number-area" id="number-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-5">
          <div className="number-img">
            <Image width={368} height={462} src="/images/about2.png" alt="" />
            
          </div>
        </div>
        <div className="col-md-7 col-lg-6">
          <div className="number-content">
            <h4>
              Yüksek kaliteli <br />
              Kişiye Özel Hizmet.
            </h4>
            <p>
              Ürünlerimizi özenli ve dikkatli kargolama
              <br /> ile adresinize ulaştırıyoruz. Ürünlerin kalitesi 
              <br /> kurulum kolaylığı ve uzun ömürlü olması. Sizlerin memnuniyetini arttırıyor.
            </p>
            <div className="number-wrapper">
              <div className="single-number">
                <h5>
                  <span className="counter">978</span>
                </h5>
                <p>Mutlu Müşteri</p>
              </div>
              <div className="single-number">
                <h5>
                  <span className="counter">2236</span>
                </h5>
                <p>Gönderilmiş Teslimat</p>
              </div>
              <div className="single-number">
                <h5>
                  <span className="counter">9</span>/
                  <span className="counter">10</span>
                </h5>
                <p>Ortalama Puan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Stats