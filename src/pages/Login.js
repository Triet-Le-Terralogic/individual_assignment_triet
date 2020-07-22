import React from "react";
import FormWrapper from "../components/FormWrapper";
import CheckBox from "../components/CheckBox";
import Logo from "../components/Logo";
import emaiIcon from "../assets/img/email_icon.svg";
import keyIcon from "../assets/img/key_icon.svg";
import { transformToArr } from "../helper";

export default function Login() {
  const formData = {
    email: {
      formType: "guess",
      config: {
        type: "email",
        label: "Email",
        placeholder: "Enter your email",
        icon: emaiIcon,
      },
    },
    password: {
      formType: "guess",
      config: {
        type: "password",
        label: "Password",
        placeholder: "Enter your password",
        icon: keyIcon,
      },
    },
  };

  const buttonData = {
    register: {
      buttonType: "button",
      config: {
        isFull: false,
        title: "Register",
      },
    },
    login: {
      buttonType: "submit",
      config: {
        isFull: true,
        title: "Login",
      },
    },
  };

  return (
    <div className="Login container text-center text-sm-left">
      <Logo />
      <FormWrapper
        formTitle="Login your account"
        formData={transformToArr(formData)}
        buttonData={transformToArr(buttonData)}
      />
      <CheckBox checkBoxTitle="Remember password" />
    </div>
  );
}
