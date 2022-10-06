import React from "react";
import "./Options.component.scss";

type Props = {
  length: number;
  setLength: (newLength: number) => void;
};

function Options({ length, setLength }: Props) {
  return (
    <div className="options-container">
      <div className="length-container">
        <div className="length-display">
          Length: <div className="length-display__value">{length}</div>
        </div>
        <input
          type="range"
          className="length-container__length-selector"
          value={length}
          onChange={(event) => setLength(parseInt(event.target.value))}
          min={1}
          max={50}
        />
      </div>
    </div>
  );
}

export default Options;
