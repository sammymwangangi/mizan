// GoogleTranslate.js
import React, { useEffect, useState } from "react";
import { getCookie, hasCookie, setCookie } from "cookies-next";


const languages = [
  { label: "ENG", value: "/auto/en" },
  { label: "AR", value: "/auto/ar" }
];

const GoogleTranslate = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Load Google Translate script dynamically
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;

    // Determine the selected language from cookie
    const initialLanguage = hasCookie("googtrans") ? getCookie("googtrans") : "/auto/en";
    setSelected(initialLanguage);
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        includedLanguages: "en,ar",
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      "google_translate_element"
    );
  };

  const langChange = (e) => {
    const selectedLanguage = e.target.value;
    setCookie("googtrans", selectedLanguage);
    setSelected(selectedLanguage);
    window.location.reload();
  };

  return (
    <>
      <div
        id="google_translate_element"
        style={{ width: "0px", height: "0px", position: "absolute", left: "50%", zIndex: -99999, display: "none" }}
      ></div>
      <select value={selected} onChange={langChange}>
        {languages.map((language) => (
          <option key={language.value} value={language.value}>
            {language.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default GoogleTranslate;
