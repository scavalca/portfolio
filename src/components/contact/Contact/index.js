import React from "react";
import "./style.css";
import linkedinIcon from "./../../../assets/images/linkedinIcon.png";

const Contact = () => {
  return (
    <div className="container">
      <h1>
        Desenvolverdor Front End/Full Stack Junior, <br />
        ou freelancer, entre em contato.
      </h1>
      <p className="contactText">Email: cmsgalindo@gmail.com</p>
      <a
        className="containerLink"
        href="https://www.linkedin.com/in/sebastiaogalindo/"
        target="_blank"
      >
        <img src={linkedinIcon} alt="" />
      </a>
    </div>
  );
};

export default Contact;
