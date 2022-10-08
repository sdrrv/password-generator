import React, { useState } from "react";
import "./CheckBox.component.scss";

function CheckBox() {
  const [status, setStatus] = useState(false);

  return (
    <div onClick={() => setStatus(!status)} className="checkBox">
      {status ? <i className="bi bi-check" /> : <></>}
    </div>
  );
}

export default CheckBox;
