import "./App.component.scss";
import PasswordOutput from "../passwordOutput/PasswordOutput";
import Options from "../options/Options";
import { useState } from "react";

function App() {
  const [passwordLength, setPasswordLength] = useState(10);
  return (
    <>
      <div className="main-container">
        <PasswordOutput />
        <Options length={passwordLength} setLength={setPasswordLength} />
      </div>
      <small className="author">
        Made by <a href="https://github.com/sdrrv">sdrrv</a> with ❤️
      </small>
    </>
  );
}

export default App;
