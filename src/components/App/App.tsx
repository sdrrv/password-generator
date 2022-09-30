import "./App.component.scss";
import PasswordOutput from "../passwordOutput/PasswordOutput";
import Options from "../options/Options";
import { useState } from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(10);
  return (
    <div className="main-container">
      <PasswordOutput />
      <Options length={passwordLength} setLength={setPasswordLength} />
    </div>
  );
}

export default App;
