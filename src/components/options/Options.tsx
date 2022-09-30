import React from "react";
import "./Options.component.scss";

function Options() {
  return (
    <div className="options-container">
      <div className="length-container">
        <div className="length-display">
          Length: <div className="length-display__value">25</div>
        </div>
        <input type="range" className="length-container__length-selector" />
      </div>
    </div>
  );
}

export default Options;
