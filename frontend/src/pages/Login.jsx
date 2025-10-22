import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

export default function Login() {
  const [language, setLanguage] = useState("Svenska");

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const text = {
    Svenska: {
      home: "Hem",
      order: "Beställ",
      customers: "Våra Kunder",
      about: "Om oss",
      contact: "Kontakta oss",
    },
    English: {
      home: "Home",
      order: "Order",
      customers: "Our Customers",
      about: "About us",
      contact: "Contact us",
    },
  };
    return (
        <div>
        <Navbar
        language={language}
        changeLanguage={changeLanguage}
        text={text}
        />

        <Footer
        language={language}
        text={text}
        />
        </div>
    )
}