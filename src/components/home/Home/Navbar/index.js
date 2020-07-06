import React from "react";
import "../../../../styles.css";
import "./style.css";
import brazilFlag from "../../../../assets/images/brazil.png";
import franceFlag from "../../../../assets/images/france.png";
import britishflag from "../../../../assets/images/england.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container container--navbar">
      <div className="content navbar">
        <div className="navbar__logo">&lt; SCG /&gt;</div>
        <nav className="navbar__nav">
          <NavLink
            exact
            className="navbar__navlink"
            activeClassName="navbar__navlink--active"
            to="/"
          >
            Início
          </NavLink>

          <NavLink
            exact
            className="navbar__navlink"
            activeClassName="navbar__navlink--active"
            to="/about"
          >
            Sobre
          </NavLink>

          <NavLink
            exact
            className="navbar__navlink"
            activeClassName="navbar__navlink--active"
            to="/portfolio"
          >
            Portfólio
          </NavLink>

          <NavLink
            exact
            className="navbar__navlink"
            activeClassName="navbar__navlink--active"
            to="/contact"
          >
            Contato
          </NavLink>
        </nav>

        <ul className="navbar__languages">
          <li className="navbar__languages__flag">
            <img src={brazilFlag} alt="" />
          </li>
          <li className="navbar__languages__flag">
            <img src={franceFlag} alt="" />
          </li>
          <li className="navbar__languages__flag">
            <img src={britishflag} alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
