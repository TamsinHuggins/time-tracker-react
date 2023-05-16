import React from "react";
import "./TitleCard.css";
import pic from "./images/image-jeremy.png";

const TitleCard = (props) => {
  return (
    <div className="titleCard">
      <div className="reportFor">
        <img className="profilePic" src={pic} />
        <h5>Report for</h5>
        <h1> Jeremy Robson</h1>
      </div>
      <h5 style={{ color: "hsl(235, 45%, 61%)" }}>Daily</h5>
      <h5> Weekly</h5>
      <h5 style={{ color: "hsl(235, 45%, 61%)" }}> Monthly</h5>
    </div>
  );
};

export default TitleCard;
