import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import '@/styles/main.css';
import { useEffect } from "react";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'] 
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}