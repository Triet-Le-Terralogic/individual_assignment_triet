import React from "react";
import "./App.css";
import Login from "./pages/Login";
import GuessLayout from "./layout/GuessLayout";

function App() {
  return (
    <GuessLayout>
      <Login />
    </GuessLayout>
  );
}

export default App;
