import React from "react";
import "./App.css";
import FormCell from "./components/FormCell";
import EmailIcon from "./assets/img/Suche.svg";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <strong>Hello world</strong>
      <form>
        <FormCell
          inputType="password"
          inputLabel="Password"
          inputPlaceholder="Enter your email"
          inputIcon={EmailIcon}
        />
      </form>
      <Button buttonTitle="login" buttonType="text" isFull={false} />
    </div>
  );
}

export default App;
