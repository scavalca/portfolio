import React from "react";
import "./style.css";
import Card from "./Card";
import projects from "../../../utils/projects";

import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="content">
        <h1 className="portfolio-title">{t("portfolioTitle")}</h1>
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
