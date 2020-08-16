import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1 className="contact__title">{t("contactTitle")}</h1>
      <p className="contact__email">Email: cmsgalindo@gmail.com</p>
      <div className="contact__icon">
        <a
          href="https://www.linkedin.com/in/sebastiaogalindo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size="48px" color="#FFFFFF" />
        </a>
        <a
          href="https://github.com/scavalca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="48px" color="#FFFFFF" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
