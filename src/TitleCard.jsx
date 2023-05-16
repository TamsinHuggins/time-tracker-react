import React from "react";
import "./TitleCard.css";
import pic from "./images/image-jeremy.png";

const TitleCard = (props) => {
  return (
    <div className="titleCard">
      <div className="reportFor">
        <div className="jeremyHolder">
          <img className="profilePic" src={pic} />
          <h5>Report for</h5>
          <h2> Jeremy Robson</h2>
        </div>
      </div>
      <div className="titleCard__text">
        <h3 style={{ color: "hsl(235, 45%, 61%)" }}>Daily</h3>
        <h3> Weekly</h3>
        <h3 style={{ color: "hsl(235, 45%, 61%)" }}> Monthly</h3>
      </div>
    </div>
  );
};

export default TitleCard;
