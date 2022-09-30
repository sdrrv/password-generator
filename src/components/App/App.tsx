import "./App.component.scss";
import PasswordOutput from "../passwordOutput/PasswordOutput";
import Options from "../options/Options";

function App() {
  return (
    <div className="main-container">
      <PasswordOutput />
      <Options />
    </div>
  );
}

export default App;
