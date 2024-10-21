import React from "react";
import "./InfoBox.scss";

const InfoBox = ({ bgColor, title, count, icon }) => {
  return (
    <div className={`info-box flex flex-row justify-evenly items-center ${bgColor}`}>
      <span className="info-icon">{icon}</span>
      <span className="info-text flex flex-col justify-evenly items-center w-full">
        <p>{title}</p>
        <h4>{count}</h4>
      </span>
    </div>
  );
};

export default InfoBox;
