import React from "react";
import "./passwordOutput.component.scss";
type Props = {
  password: string;
};

function PasswordOutput({ password }: Props) {
  return (
    <div className="pass-output">
      <div className="pass-output__text">{password}</div>
      <div className="pass-strength strong" />
    </div>
  );
}

export default PasswordOutput;
