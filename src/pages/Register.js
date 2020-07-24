import React from "react";
import FormWrapper from "../components/FormWrapper";
import Logo from "../components/Logo";
import emaiIcon from "../assets/img/email_icon.svg";
import keyIcon from "../assets/img/key_icon.svg";
import { transformToArr } from "../helper";

export default function Register() {
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
				type: "tel",
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
			},
		},
		submit: {
			pageType: "guess",
			buttonType: "submit",
			config: {
				isFull: true,
				title: "Submit",
			},
		},
	};

	return (
		<div className="Register container text-center text-lg-left">
			<Logo />
			<span className="Register__slogan">
				Start your personal photo experient
			</span>
			<FormWrapper
				pageType="guess"
				formTitle="Register your account"
				formData={transformToArr(formData)}
				buttonData={transformToArr(buttonData)}
			/>
		</div>
	);
}
