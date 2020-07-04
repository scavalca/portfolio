import React from "react";
import "../../../../styles.css";
import "./style.css";
import linkedinIcon from "../../../../assets/images/linkedinIcon.png";
import githubIcon from "../../../../assets/images/githubIcon.png";
// import imageOne from "../../assets/images/linkedin10.png";
// import imageTwo from "../../assets/images/github10.png";

const PortfolioLinks = () => {
  return (
    <div className="container">
      <div className="contentText content">
        <div className="linksItens">
          <a
            href="https://www.linkedin.com/in/sebastiaogalindo/"
            target="_blank"
          >
            <figure>
              <img src={linkedinIcon} alt="" />
            </figure>
          </a>

          <a href="https://github.com/scavalca" target="_blank">
            <figure>
              <img src={githubIcon} alt="" />
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLinks;
