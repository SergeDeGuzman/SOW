import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar({ language, changeLanguage, text }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const logoUrl = "https://storage.123fakturera.se/public/icons/diamond.png";
  const flagSE = "https://storage.123fakturere.no/public/flags/SE.png";
  const flagGB = "https://storage.123fakturere.no/public/flags/GB.png";

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <img src={logoUrl} alt="logo" />
        </a>

        <div className="language" onClick={toggleDropdown}>
        <ul className="nav-links">
          <li><a href="#">{text[language].home}</a></li>
          <li><a href="#">{text[language].order}</a></li>
          <li><a href="#">{text[language].customers}</a></li>
          <li><a href="#">{text[language].about}</a></li>
          <li><a href="#">{text[language].contact}</a></li>
        </ul>
          <img
            src={language === "Svenska" ? flagSE : flagGB}
            alt={language}
            className="flag"
          />
          <span>{language}</span>

          {dropdownOpen && (
            <div className="language-dropdown">
              <div onClick={() => changeLanguage("Svenska")}>
                <img src={flagSE} alt="Svenska" className="flag" />
                Svenska
              </div>
              <div onClick={() => changeLanguage("English")}>
                <img src={flagGB} alt="English" className="flag" />
                English
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
