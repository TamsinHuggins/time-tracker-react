import React, { useState } from "react";
import "./TitleCard.css";
import pic from "./images/image-jeremy.png";

const TitleCard = ({ setFrame, timeFrame }) => {
  //below is used to highlight the button which has been clicked

  const setTimeFrameToDaily = () => {
    setFrame("daily");
  };

  const setTimeFrameToWeekly = () => {
    setFrame("weekly");
  };

  const setTimeFrameToMonthly = () => {
    setFrame("monthly");
  };

  console.log(timeFrame);

  return (
    <div className="titleCard">
      <div className="reportFor">
        <div className="reportFor__content">
          <img className="profilePic" src={pic} />
          <h5>Report for</h5>
          <h2> Jeremy Robson</h2>
        </div>
      </div>
      <div className="titleCard__buttons">
        {/* <h3 style={{ color: "hsl(235, 45%, 61%)" }}>Daily</h3> */}
        <button
          style={{
            color: timeFrame === "daily" ? "white" : "hsl(235, 45%, 61%)",
          }}
          className="Button"
          type="button"
          onClick={setTimeFrameToDaily}
        >
          Daily
        </button>
        <button
          style={{
            color: timeFrame === "weekly" ? "white" : "hsl(235, 45%, 61%)",
          }}
          className="Button"
          type="button"
          onClick={setTimeFrameToWeekly}
        >
          Weekly
        </button>

        <button
          style={{
            color: timeFrame === "monthly" ? "white" : "hsl(235, 45%, 61%)",
          }}
          className="Button"
          type="button"
          onClick={setTimeFrameToMonthly}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default TitleCard;
