import React from "react";
import "../../../../styles.css";
import "./style.css";
import brazilFlag from "../../../../assets/images/brazil.png";
import franceFlag from "../../../../assets/images/france.png";
import britishflag from "../../../../assets/images/england.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="container">
      <div className="navbar content">
        <div className="logo">SCG</div>

        <ul className="links">
          <Link to="/">
            <li>Início</li>
          </Link>

          <Link to="/about">
            <li>Sobre</li>
          </Link>

          <Link to="/portfolio">
            <li>Portfólio</li>
          </Link>

          <Link to="/contact">
            <li>Contato</li>
          </Link>
        </ul>

        {/* <ul className="links">
          <li>
            <a href="home">Início</a>
          </li>
          <li>
            <a href="about">Sobre</a>
          </li>
          <li>
            <a href="potfolio">Portfólio</a>
          </li>
          <li>
            <a href="contact">Contato</a>
          </li>
        </ul> */}

        <ul className="navbarLanguages">
          <li>
            <img src={brazilFlag} alt="" />
          </li>
          <li>
            <img src={franceFlag} alt="" />
          </li>
          <li>
            <img src={britishflag} alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
