import React from "react";
import "./App.css";
import GuessLayout from "./layout/GuessLayout";
// import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <GuessLayout>
      {/* <Login /> */}
      <Register />
    </GuessLayout>
  );
}

export default App;
