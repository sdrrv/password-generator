import React from "react";
import "./passwordOutput.component.scss";
type Props = {
  password: string;
  refreshPassword: () => void;
};

function getStrength(passwordLength: number): string {
  if (passwordLength < 10) return "weak";
  if (passwordLength >= 10 && passwordLength < 20) return "moderate";
  else return "strong";
}

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
      <div className={"pass-strength " + getStrength(password.length)} />
    </div>
  );
}

export default PasswordOutput;
