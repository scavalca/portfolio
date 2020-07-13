import React from "react";
import "./style.css";
import htmlIcon from "./../../../assets/images/htmlIcon.png";
import cssIcon from "./../../../assets/images/cssIcon.png";
import reactIcon from "./../../../assets/images/reactIcon.png";
import jsIcon from "./../../../assets/images/jsIcon.png";
import nodeIcon from "./../../../assets/images/nodeIcon.png";
import mongodbIcon from "./../../../assets/images/mongodbIcon.png";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1 className="about__title">{t("aboutTitle")}</h1>
      <div className="about__icons">
        <img className="images__size" src={htmlIcon} alt="" />
        <img className="images__size" src={cssIcon} alt="" />
        <img className="images__size" src={reactIcon} alt="" />
        <img className="images__size" src={jsIcon} alt="" />
        <img className="images__size" src={nodeIcon} alt="" />
        <img className="images__size" src={mongodbIcon} alt="" />
      </div>
      <p className="about__text">{t("aboutTextOne")}</p>
      <p className="about__text">{t("aboutTextTwo")}</p>
    </div>
  );
};

export default About;
