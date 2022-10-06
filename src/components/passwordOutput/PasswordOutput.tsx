import React from "react";
import "./passwordOutput.component.scss";
type Props = {
  password: string;
  refreshPassword: () => void;
};

function PasswordOutput({ password, refreshPassword }: Props) {
  return (
    <div className="pass-output">
      <div className="pass-output__text">{password}</div>
      <div className="pass-output__buttons">
        <button onClick={refreshPassword}>
          <i className="bi bi-arrow-clockwise" />
        </button>
        <button onClick={() => navigator.clipboard.writeText(password)}>
          <i className="bi bi-clipboard" />
        </button>
      </div>
      <div className="pass-strength strong" />
    </div>
  );
}

export default PasswordOutput;
