import React from "react";
import "../../../../styles.css";
import "./style.css";
import profileImage from "../../../../assets/images/profileImage.png";

const ProfileImage = () => {
  return (
    <div className="container">
      <div className="contentText content">
        <figure className="profilepicture">
          <img src={profileImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProfileImage;
