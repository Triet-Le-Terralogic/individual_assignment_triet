import React from "react";
import FormWrapper from "../components/FormWrapper";
import Logo from "../components/Logo";
import emaiIcon from "../assets/img/email_icon.svg";
import keyIcon from "../assets/img/key_icon.svg";

export default function Register() {
  const formData = [
    {
      inputID: 0,
      inputType: "email",
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
    {
      inputID: 2,
      inputType: "password",
      inputLabel: "Confirm Password",
      inputPlaceholder: "Enter your password",
      inputIcon: keyIcon,
    },
    {
      inputID: 3,
      inputType: "text",
      inputLabel: "Full Name",
      inputPlaceholder: "Enter your name",
      inputIcon: emaiIcon,
    },
    {
      inputID: 4,
      inputType: "tel",
      inputLabel: "Phone number",
      inputPlaceholder: "Enter your phone number",
      inputIcon: emaiIcon,
    },
  ];

  const buttonData = [
    {
      buttonID: 0,
      buttonTitle: "Back",
      isFull: false,
      buttonType: "button",
    },
    {
      buttonID: 1,
      buttonTitle: "Submit",
      isFull: true,
      buttonType: "submit",
    },
  ];
  return (
    <div className="Login container text-center text-sm-left">
      <Logo />
      <FormWrapper
        formTitle="Register your account"
        formData={formData}
        buttonData={buttonData}
      />
    </div>
  );
}
