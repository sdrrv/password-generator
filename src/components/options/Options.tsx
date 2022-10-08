import React from "react";
import "./Options.component.scss";
import CheckBox from "../CheckBox/CheckBox";

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
      <div className="usage-container">
        Using:
        <div className="usage-container__buttons">
          <div>
            ABC
            <CheckBox />
          </div>
          <div>
            abc
            <input type="checkbox" />
          </div>
          <div>
            123
            <input type="checkbox" />
          </div>
          <div>
            %$!
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Options;
