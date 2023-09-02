import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return ( <
        Html lang = "en" >
        <
        Head >
        <
        link rel = "icon"
        type = "image/x-icon"
        href = "/images/favicon.svg" / >
        <
        link rel = "stylesheet"
        href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" /
        >
        <
        link rel = "stylesheet"
        href = "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" /
        >

        <
        /Head> <
        body >
        <
        Main / >
        <
        NextScript / >
        <
        Script src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy = "lazyOnload"
        onLoad = {
            () => {
                googleTranslateElementInit();
            }
        }
        /> <
        /body> <
        /Html>
    );
}