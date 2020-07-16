import React from "react";
import "./style.css";

import i18next from "i18next";

const Card = ({ image, title, subTitle, text, link }) => {
  return (
    <article className="card">
      <figure className="card__img">
        <img src={image} alt={title} />
      </figure>

      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <span className="card__sub-title">{subTitle[i18next.language]}</span>
        <p className="card__text">{text[i18next.language]}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button className="btn">Demo</button>
        </a>
      </div>
    </article>
  );
};

export default Card;
