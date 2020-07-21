import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <strong>Hello world</strong>
      <Button title="Login" type="submit" isFull={false} />
    </div>
  );
}

export default App;
