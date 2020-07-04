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
      <h1 className="text">Sou desenvolvedor Front End/Full Stack.</h1>
      <div className="imagesIcons">
        <img className="imagesSize" src={htmlIcon} alt="" />
        <img className="imagesSize" src={cssIcon} alt="" />
        <img className="imagesSize" src={reactIcon} alt="" />
        <img className="imagesSize" src={jsIcon} alt="" />
        <img className="imagesSize" src={nodeIcon} alt="" />
        <img className="imagesSize" src={mongodbIcon} alt="" />
      </div>
      <p className="text">
        Formado em Administração de Empresas, com alguns anos de experiência no
        ramo, decidi migrar para área de tecnologia, mais especificamente
        programação web.
      </p>
      <p className="text">
        Venho adquirindo conhecimento e domínio nas tecnologias citadas acima.
        <br />
        Esses conhecimentos vieram de muito estudo e prática no bootcamp da
        Ironhack, Impacta,Escola 42 de tecnologia e cursos livres.
      </p>
      <p className="text">
        Além de habilidades técnicas, possuo facilidade para trabalhar em
        equipe, seja em pair programming ou com outros times internos, gosto de
        colaborar e oferecer suporte e sou um bom ouvinte.
      </p>
    </div>
  );
};

export default About;
