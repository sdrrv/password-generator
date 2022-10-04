import "./App.component.scss";
import PasswordOutput from "../passwordOutput/PasswordOutput";
import Options from "../options/Options";
import { useEffect, useState } from "react";
import {
  generate,
  passwordGenerator,
  SelectedUses,
} from "../../utils/passwordGenerator";

function App() {
  const [passwordLength, setPasswordLength] = useState(10);
  const [config, setConfig] = useState<SelectedUses[]>([
    SelectedUses.Numbers,
    SelectedUses.Symbols,
    SelectedUses.UpperCase,
    SelectedUses.LowerCase,
  ]);
  const [password, setPassword] = useState(
    passwordGenerator(passwordLength, generate(config))
  );

  useEffect(() => {
    reGeneratePassword();
  }, [config, passwordLength]);

  const reGeneratePassword = () => {
    setPassword(passwordGenerator(passwordLength, generate(config)));
  };

  return (
    <div className="main-container">
      <PasswordOutput password={password} />
      <Options length={passwordLength} setLength={setPasswordLength} />
    </div>
  );
}

export default App;
