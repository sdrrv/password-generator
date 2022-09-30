import React, { ChangeEvent } from "react";
import "./Options.component.scss";

type Props = {
  length: number;
  setLength: (newLength: number) => void;
};

function Options({ length, setLength }: Props) {
  const handleLengthChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setLength(newValue < 10 ? 10 : newValue);
  };

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
          onChange={handleLengthChange}
        />
      </div>
    </div>
  );
}

export default Options;
