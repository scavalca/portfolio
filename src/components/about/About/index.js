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
      {/* <h1 className="text">Sou desenvolvedor Front End/Full Stack</h1> */}
      <div className="imagesIcons">
        <img className="imagesSize" src={htmlIcon} alt="" />
        <img className="imagesSize" src={cssIcon} alt="" />
        <img className="imagesSize" src={reactIcon} alt="" />
        <img className="imagesSize" src={jsIcon} alt="" />
        <img className="imagesSize" src={nodeIcon} alt="" />
        <img className="imagesSize" src={mongodbIcon} alt="" />
      </div>
      <p className="text">
        Com conhecimento e domínio das tecnologias HTML, CSS, React, JavaScript,
        Node.js, MongoDb,Express.js, banco de dados NoSQ, Linguagem C, métodos
        ágeis e controle de versionamento com Git e GitHub.
      </p>
      {/* <p className="text">
        Venho adquirindo conhecimento e domínio nas tecnologias citadas acima.
        <br />
        Esses conhecimentos vieram de muito estudo e prática no bootcamp da
        Ironhack, Impacta,Escola 42 de tecnologia e cursos livres.
      </p> */}
      <p className="text">
        Além de habilidades técnicas, falo inglês e francês, possuo facilidade
        de aprendizado, facilidade para trabalhar em equipe, seja em pair
        programming ou com outros times internos, gosto de colaborar e oferecer
        suporte e sou um bom ouvinte.
      </p>
    </div>
  );
};

export default About;
