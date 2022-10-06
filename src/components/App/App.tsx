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

  function generateNewPassword(): string {
    return passwordGenerator(passwordLength, generate(config));
  }

  const [password, setPassword] = useState(generateNewPassword);

  useEffect(() => setPassword(generateNewPassword()), [config, passwordLength]);

  return (
    <div className="main-container">
      <PasswordOutput
        password={password}
        refreshPassword={() => setPassword(generateNewPassword())}
      />
      <Options length={passwordLength} setLength={setPasswordLength} />
    </div>
  );
}

export default App;
