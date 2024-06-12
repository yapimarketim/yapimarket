import type { AppProps } from 'next/app'
import { Roboto } from "next/font/google";
import '@/styles/globals.css'
import '@/styles/index.css'
import '@/styles/responsive.css'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html, body {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
