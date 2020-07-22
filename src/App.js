import React from "react";
import GuessLayout from "./layouts/GuessLayout";
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
