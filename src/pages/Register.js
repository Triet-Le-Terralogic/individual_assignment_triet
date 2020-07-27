import React, { useState } from "react";
import {} from "react-redux";

import GuessLayout from "../layouts/GuessLayout";
import FormWrapper from "../components/FormWrapper";
import ButtonListWrapper from "../components/ButtonListWrapper";
import Logo from "../components/Logo";
import emaiIcon from "../assets/img/email_icon.svg";
import keyIcon from "../assets/img/key_icon.svg";
import { transformToArr, initStateCreator, registerValidator } from "../helper";

export default function Register({ onRegisterHandler }) {
	const onSubmitFormHandler = () => {
		if (registerValidator(formInputstate)) {
			onRegisterHandler(formInputstate);
		}
		// Else popup invalid form
		console.log("invalid form");
	};

	const onChangeToLoginPage = () => {
		console.log("change to Login");
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
		confirmPassword: {
			pageType: "guess",
			config: {
				type: "password",
				label: "Confirm Password",
				placeholder: "Enter your password",
				icon: keyIcon,
			},
		},
		name: {
			pageType: "guess",
			config: {
				type: "text",
				label: "Full Name",
				placeholder: "Enter your name",
				icon: emaiIcon,
			},
		},
		phone: {
			pageType: "guess",
			config: {
				type: "text",
				label: "Phone Number",
				placeholder: "Enter your phone number",
				icon: emaiIcon,
			},
		},
	};

	const buttonData = {
		back: {
			pageType: "guess",
			buttonType: "button",
			config: {
				isFull: false,
				title: "Back",
				onClickHandler: onChangeToLoginPage,
			},
		},
		submit: {
			pageType: "guess",
			buttonType: "button",
			config: {
				isFull: true,
				title: "Submit",
				onClickHandler: onSubmitFormHandler,
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

	return (
		<GuessLayout>
			<div className="Register container text-center text-lg-left">
				<Logo />
				<span className="Register__slogan">
					Start your personal photo experient
				</span>
				<form onSubmit={onSubmitFormHandler}>
					<FormWrapper
						onUserInputHandler={onUserInputHandler}
						formTitle="Register your account"
						formData={transformToArr(formData)}
						formInputstate={formInputstate}
					/>
					<ButtonListWrapper
						buttonData={transformToArr(buttonData)}
						pageType="guess"
					/>
				</form>
			</div>
		</GuessLayout>
	);
}
