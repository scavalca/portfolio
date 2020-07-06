import React from "react";
import "../../../../styles.css";
import "./style.css";
import profileImage from "../../../../assets/images/profileImage.png";

const ProfileImage = () => {
  return (
    <figure className="profile-picture">
      <img src={profileImage} alt="" />
    </figure>
  );
};

export default ProfileImage;
