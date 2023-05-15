import React from "react";
import "./TitleCard.css";
import pic from "./images/image-jeremy.png";

const TitleCard = (props) => {
  return (
    <div className="titleCard">
      <div className="reportFor">
        <img className="profilePic" src={pic} />
        <h5 className="TitleCard__Text">Report for</h5>
        <h1> Jeremy Robson</h1>
      </div>
      <h5>Daily</h5>
      <h5> Weekly</h5>
      <h5> Monthly</h5>
    </div>
  );
};

export default TitleCard;
