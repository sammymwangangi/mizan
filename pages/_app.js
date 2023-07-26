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

    // Get the iframe element by its ID or class name
    const iframe = document.getElementById(':2.container');

    // Check if the iframe element exists
    if (iframe) {
      // Update the style attribute to set visibility to hidden
      iframe.style.visibility = 'hidden';
    }
  }, []);
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className={poppins.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}