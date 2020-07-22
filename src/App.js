import React from "react";
import "./App.css";
import FormWrapper from "./components/FormWrapper";
import emaiIcon from "./assets/img/email_icon.svg";
import keyIcon from "./assets/img/key_icon.svg";
import CheckBox from "./components/CheckBox";

function App() {
  const formData = [
    {
      inputID: 0,
      inputType: "text",
      inputLabel: "Email",
      inputPlaceholder: "Enter your email",
      inputIcon: emaiIcon,
    },
    {
      inputID: 1,
      inputType: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputIcon: keyIcon,
    },
  ];

  const buttonData = [
    {
      buttonID: 0,
      buttonTitle: "Register",
      isFull: false,
      buttonType: "button",
    },
    {
      buttonID: 1,
      buttonTitle: "Login",
      isFull: true,
      buttonType: "button",
    },
  ];
  return (
    <div className="App">
      <FormWrapper
        formTitle="Login your account"
        formData={formData}
        buttonData={buttonData}
      />
      <CheckBox checkBoxTitle="Remember password" />
    </div>
  );
}

export default App;
