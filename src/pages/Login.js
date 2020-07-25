import React, { useState } from "react";
import FormWrapper from "../components/FormWrapper";
import ButtonListWrapper from "../components/ButtonListWrapper";
import CheckBox from "../components/CheckBox";
import Logo from "../components/Logo";
import emaiIcon from "../assets/img/email_icon.svg";
import keyIcon from "../assets/img/key_icon.svg";
import { transformToArr, initStateCreator } from "../helper";

export default function Login() {
  const formData = {
    email: {
      pageType: "guess",
      config: {
        type: "email",
        label: "Email",
        placeholder: "Enter your email",
        icon: emaiIcon,
      },
    },
    password: {
      pageType: "guess",
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
  // Create dynamic initState
  const initialState = initStateCreator(transformToArr(formData));
  const [formInputstate, setFormInputState] = useState(initialState);

  // set form's input state
  const onUserInputHandler = (val, name) => {
    setFormInputState((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    console.log("Submit form!", formInputstate);
  };

  return (
    <div className="Login container text-center text-lg-left">
      <Logo />
      <span className="Login__slogan">
        Start your personal photo experience
      </span>
      <form onSubmit={onSubmitFormHandler}>
        <FormWrapper
          onUserInputHandler={onUserInputHandler}
          formTitle="Login your account"
          formData={transformToArr(formData)}
          formInputstate={formInputstate}
        />
        <ButtonListWrapper
          buttonData={transformToArr(buttonData)}
          pageType="guess"
        />
        <CheckBox checkBoxTitle="Remember password" />
      </form>
    </div>
  );
}
