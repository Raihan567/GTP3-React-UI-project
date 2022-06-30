import React from "react";
import "./Feature.css";
const Feature = ({ text, title }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div>
          <h1>{title}</h1>
        </div>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
