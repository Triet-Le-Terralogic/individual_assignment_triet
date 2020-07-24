import React from "react";
import FormWrapper from "../components/FormWrapper";
import Logo from "../components/Logo";
import emaiIcon from "../assets/img/email_icon.svg";
import keyIcon from "../assets/img/key_icon.svg";
import { transformToArr } from "../helper";

export default function Register() {
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
		confirmPassword: {
			formType: "guess",
			config: {
				type: "password",
				label: "Confirm Password",
				placeholder: "Enter your password",
				icon: keyIcon,
			},
		},
		name: {
			formType: "guess",
			config: {
				type: "text",
				label: "Full Name",
				placeholder: "Enter your name",
				icon: emaiIcon,
			},
		},
		phone: {
			formType: "guess",
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
			buttonType: "button",
			config: {
				isFull: false,
				title: "Back",
			},
		},
		submit: {
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
				formTitle="Register your account"
				formData={transformToArr(formData)}
				buttonData={transformToArr(buttonData)}
			/>
		</div>
	);
}
