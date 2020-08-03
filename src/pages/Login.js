import React, { useState } from "react";
import PropTypes from "prop-types";

import GuessLayout from "../layouts/GuessLayout";
import FormWrapper from "../components/FormWrapper";
import ButtonListWrapper from "../components/ButtonListWrapper";
import CheckBox from "../components/CheckBox";

import Logo from "../components/Logo";
import emaiIcon from "../assets/img/email_icon.svg";
import keyIcon from "../assets/img/key_icon.svg";
import { transformToArr, initStateCreator, loginValidator } from "../helper";

const Login = ({
  onLoginHandler = () => {},
  history = {},
  onTriggerNotificationHandler = () => {},
}) => {
  const onSubmitFormHandler = () => {
    if (loginValidator(formInputState)) {
      onLoginHandler(formInputState);
    } else {
      // else popup invalid form notification
      const triggerData = {
        header: "Login failed!",
        body: "Email or Password are invalid.",
      };
      onTriggerNotificationHandler(triggerData);
    }
  };

  const onChangeToResigterPage = () => {
    history.push({
      pathname: "/register",
    });
    console.log("Change route");
  };

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
      pageType: "guess",
      config: {
        isFull: false,
        title: "Register",
        onClickHandler: onChangeToResigterPage,
      },
    },
    login: {
      buttonType: "button",
      pageType: "guess",
      config: {
        isFull: true,
        title: "Login",
        onClickHandler: onSubmitFormHandler,
      },
    },
  };
  // Create dynamic initState
  const initialState = initStateCreator(transformToArr(formData));
  const [formInputState, setformInputState] = useState(initialState);

  // set form's input state
  const onUserInputHandler = (val, name) => {
    setformInputState((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  return (
    <GuessLayout>
      <div className="Login container text-center text-lg-left">
        <Logo />
        <span className="Login__slogan">
          Start your personal photo experience
        </span>
        <FormWrapper
          onUserInputHandler={onUserInputHandler}
          formTitle="Login your account"
          formData={transformToArr(formData)}
          formInputState={formInputState}
        />
        <ButtonListWrapper
          buttonData={transformToArr(buttonData)}
          pageType="guess"
        />
        <CheckBox checkBoxTitle="Remember password" />
      </div>
    </GuessLayout>
  );
};

Login.propTypes = {
  onLoginHandler: PropTypes.func,
  history: PropTypes.object,
  onTriggerNotificationHandler: PropTypes.func,
};

export default Login;
