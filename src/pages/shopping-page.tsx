import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import PageHeader from '@/components/PageHeader/PageHeader'
import Head from 'next/head'
import React from 'react'

const ShoppingPage = () => {
  return (
    <>
      <Head>
        <title>Yapı Market</title>
        <meta
          name="description"
          content="Mutfak ekipmanları yapı gereçleri tüm ürünler"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <PageHeader title="Online alışveriş modülümüz çok yakında sizlerle" navTitle="Alışveriş Sepeti" />
      <div className='w-100 text-center m-5'>
      <a className="main_btn" href="#">
                Fiyat Teklifi Alın
              </a>
      </div>
      <Footer />
    </>
  )
}

export default ShoppingPage