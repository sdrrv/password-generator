import React, { useState } from "react";
import "./CheckBox.component.scss";

type Props = {
  check?: () => void;
};

function CheckBox({ check }: Props) {
  const [status, setStatus] = useState(true);

  return (
    <div onClick={() => setStatus(!status)} className="checkBox">
      {status ? <i className="bi bi-check" /> : <></>}
    </div>
  );
}

export default CheckBox;
