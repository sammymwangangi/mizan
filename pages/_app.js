import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
// import '../styles/globals.css';
import '@/styles/main.css';
import '@/styles/owl.carousel.min.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
