import React from "react";
import "../../../../styles.css";
import "./style.css";
import logo from "../../../../assets/images/logo.png";
import brazilFlag from "../../../../assets/images/brazil.png";
import franceFlag from "../../../../assets/images/france.png";
import britishflag from "../../../../assets/images/england.png";

import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <header className="container container--navbar">
      <div className="content navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navbar__nav">
          <NavLink
            exact
            className="navbar__navlink"
            activeClassName="navbar__navlink--active"
            to="/"
          >
            {t("navbarHome")}
          </NavLink>

          <NavLink
            exact
            className="navbar__navlink"
            activeClassName="navbar__navlink--active"
            to="/about"
          >
            {t("navbarAbout")}
          </NavLink>

          <NavLink
            exact
            className="navbar__navlink"
            activeClassName="navbar__navlink--active"
            to="/portfolio"
          >
            {t("navbarPortfolio")}
          </NavLink>

          <NavLink
            exact
            className="navbar__navlink"
            activeClassName="navbar__navlink--active"
            to="/contact"
          >
            {t("navbarContact")}
          </NavLink>
        </nav>

        <ul className="navbar__languages">
          <li className="navbar__languages__flag">
            <img src={brazilFlag} alt="" onClick={() => handleClick("pt")} />
          </li>
          <li className="navbar__languages__flag">
            <img src={franceFlag} alt="" onClick={() => handleClick("fr")} />
          </li>
          <li className="navbar__languages__flag">
            <img src={britishflag} alt="" onClick={() => handleClick("en")} />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
