import React from "react";
import "./Card.css";
import { ReactComponent as WorkLogo } from "./images/icon-work.svg";

console.log(WorkLogo);

const Card = (props) => {
  return (
    <div style={props.style} className="Card">
      <WorkLogo className="icon" />
      <div className="Card__stats">
        <h3>{props.activity}</h3>
        <h1>{props.time}</h1>
        <h5>{props.history}</h5>
      </div>
    </div>
  );
};

export default Card;
