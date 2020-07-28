import React, { useState } from "react";
import PropTypes from "prop-types";

import GuessLayout from "../layouts/GuessLayout";
import FormWrapper from "../components/FormWrapper";
import ButtonListWrapper from "../components/ButtonListWrapper";
import CheckBox from "../components/CheckBox";
import Modal from "../layouts/Modal";

import Logo from "../components/Logo";
import emaiIcon from "../assets/img/email_icon.svg";
import keyIcon from "../assets/img/key_icon.svg";
import { transformToArr, initStateCreator, loginValidator } from "../helper";

const Login = ({ onLoginHandler = () => {}, history = {} }) => {
	const onSubmitFormHandler = () => {
		if (loginValidator(formInputstate)) {
			onLoginHandler(formInputstate);
		} else {
			// else popup invalid form notification
			setModalState(true);
			console.log("invalid form");
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
	const [formInputstate, setFormInputState] = useState(initialState);
	const [modalState, setModalState] = useState(false);

	// set form's input state
	const onUserInputHandler = (val, name) => {
		setFormInputState((prevState) => ({
			...prevState,
			[name]: val,
		}));
	};

	return (
		<>
			<Modal
				modalHeader="Login failed"
				modalBody="Invalid email/password!"
				modalType="nofi"
				isShow={modalState}
				denyFunc={() => setModalState(false)}
				acceptFunc={() => setModalState(false)}
			/>
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
						formInputstate={formInputstate}
					/>
					<ButtonListWrapper
						buttonData={transformToArr(buttonData)}
						pageType="guess"
					/>
					<CheckBox checkBoxTitle="Remember password" />
				</div>
			</GuessLayout>
		</>
	);
};

Login.propTypes = {
	onLoginHandler: PropTypes.func,
	history: PropTypes.object,
};

export default Login;
