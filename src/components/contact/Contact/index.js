import React from "react";
import "./style.css";
import linkedinIcon from "./../../../assets/images/linkedinIcon.png";

const Contact = () => {
  return (
    <div className="container">
      <h1>Vamos bater um papo para me conhecer melhor</h1>
      <p className="contactText">Email: cmsgalindo@gmail.com</p>
      <a
        className="containerLink"
        href="https://www.linkedin.com/in/sebastiaogalindo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedinIcon} alt="" />
      </a>
    </div>
  );
};

export default Contact;
