import React from "react";
import Introduction from "./Introduction";
import ProfileImage from "./ProfileImage";

const Home = () => (
  <div className="container">
    <div className="content row align-center">
      <Introduction />
      <ProfileImage />
    </div>
  </div>
);

export default Home;
