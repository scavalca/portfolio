import React from "react";
import "../../../../styles.css";
import "./style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();

  return (
    <section className="introduction">
      <h1 className="introduction__title">{t("introductionTitle")}</h1>
      <p className="introduction__text">{t("introductionText")}</p>
      <div className="introduction__icons">
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
    </section>
  );
};

export default Introduction;
