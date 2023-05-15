import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div style={props.style} className="Card">
      <div className="Card__stats">
        <h3>{props.activity}</h3>
        <h1>{props.time}</h1>
        <h5>{props.history}</h5>
      </div>
    </div>
  );
};

export default Card;
