import React from "react";
import "./style.css";
import htmlIcon from "./../../../assets/images/htmlIcon.png";
import cssIcon from "./../../../assets/images/cssIcon.png";
import reactIcon from "./../../../assets/images/reactIcon.png";
import jsIcon from "./../../../assets/images/jsIcon.png";
import nodeIcon from "./../../../assets/images/nodeIcon.png";
import mongodbIcon from "./../../../assets/images/mongodbIcon.png";

const About = () => {
  return (
    <div className="container">
      <h1 className="about__title">
        Transformo suas ideias em aplicações funcionais
      </h1>
      <div className="about__icons">
        <img className="images__size" src={htmlIcon} alt="" />
        <img className="images__size" src={cssIcon} alt="" />
        <img className="images__size" src={reactIcon} alt="" />
        <img className="images__size" src={jsIcon} alt="" />
        <img className="images__size" src={nodeIcon} alt="" />
        <img className="images__size" src={mongodbIcon} alt="" />
      </div>
      <p className="about__text">
        Com conhecimento e domínio das tecnologias HTML, CSS, React, JavaScript,
        Node.js, MongoDb, Express.js, banco de dados NoSQ, Linguagem C, métodos
        ágeis e controle de versionamento com Git e GitHub.
      </p>
      <p className="about__text">
        Além de habilidades técnicas, falo inglês e francês, possuo facilidade
        de aprendizado, facilidade para trabalhar em equipe, seja em pair
        programming ou com outros times internos, gosto de colaborar e oferecer
        suporte e sou um bom ouvinte.
      </p>
    </div>
  );
};

export default About;
