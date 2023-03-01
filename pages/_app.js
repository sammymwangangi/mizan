import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css';
import '@/styles/owl.carousel.min.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />
}
