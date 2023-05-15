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
      Daily weekly monthly
    </div>
  );
};

export default TitleCard;
