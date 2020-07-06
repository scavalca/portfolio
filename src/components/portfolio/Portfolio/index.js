import React from "react";
import "./style.css";
import Card from "./Card";
import projects from "../../../utils/projects";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="portfolio-title">Conheça meus principais projetos</h1>
        <section className="grid">
          {projects.map((project) => (
            <Card
              key={project.title}
              image={project.image}
              title={project.title}
              subTitle={project.subTitle}
              text={project.text}
              link={project.link}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
