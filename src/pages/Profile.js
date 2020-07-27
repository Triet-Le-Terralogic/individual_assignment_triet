import React, { useState } from "react";
import PropTypes from "prop-types";
import AdminLayout from "../layouts/AdminLayout";
import AvatarAdmin from "../components/AvatarAdmin";
import AdminSection from "../components/AdminSection";
import trumpAvatar from "../assets/img/test_avatar.jpg";
import {
	transformToArr,
	initStateCreator,
	changePasswordValidator,
} from "../helper";
import ButtonListWrapper from "../components/ButtonListWrapper";

export default function Profile({ onLogoutHandler = () => {} }) {
	const onSubmitFormHandler = () => {
		if (changePasswordValidator(formChangePasswordState)) {
			console.log("Submit form!", formChangePasswordState);
		}
		// else popup invalid form
		console.log("invalid form");
	};

	const infoFormData = {
		fullName: {
			pageType: "admin",
			customStyle: "col-lg-6 offset-reverse-6",
			config: {
				type: "text",
				label: "Full name",
				placeholder: "Your full name",
			},
		},
		password: {
			pageType: "admin",
			customStyle: "col-lg-6",
			config: {
				type: "email",
				label: "Email",
				placeholder: "Your email",
			},
		},
		phone: {
			pageType: "admin",
			customStyle: "col-lg-6",
			config: {
				type: "text",
				label: "Phone",
				placeholder: "Your phone number",
			},
		},
	};

	const changePasswordFormData = {
		currentPassword: {
			pageType: "admin",
			customStyle: "col-lg-6 offset-reverse-6",
			config: {
				type: "password",
				label: "Current password",
				placeholder: "Enter your current password",
			},
		},
		newPassword: {
			pageType: "admin",
			customStyle: "col-lg-6",
			config: {
				type: "password",
				label: "New password",
				placeholder: "Enter your new password",
			},
		},
		confirmPassword: {
			pageType: "admin",
			customStyle: "col-lg-6",
			config: {
				type: "password",
				label: "Confirm password",
				placeholder: "Confirm your new password",
			},
		},
	};

	const buttonData = {
		save: {
			pageType: "admin",
			buttonType: "button",
			config: {
				isFull: true,
				title: "Save",
				onClickHandler: onSubmitFormHandler,
			},
		},
		logout: {
			pageType: "admin",
			buttonType: "button",
			config: {
				isFull: false,
				title: "Log Out",
				onClickHandler: onLogoutHandler,
			},
		},
	};

	// Create dynamic initState
	const initialState = initStateCreator(transformToArr(changePasswordFormData));
	const [formChangePasswordState, setFormChangePasswordState] = useState(
		initialState
	);

	// set form's input state
	const onUserInputHandler = (val, name) => {
		setFormChangePasswordState((prevState) => ({
			...prevState,
			[name]: val,
		}));
	};

	const avatarAdmin = (
		<AvatarAdmin avatarTitle="donald trump" avatarImg={trumpAvatar} />
	);
	return (
		<AdminLayout>
			<div className="Profile container text-center text-lg-left">
				<AdminSection
					sectionHeader={avatarAdmin}
					sectionData={transformToArr(infoFormData)}
					formInputstate={{}}
				/>
				<AdminSection
					onUserInputHandler={onUserInputHandler}
					formInputstate={formChangePasswordState}
					sectionHeader="Change Password"
					sectionData={transformToArr(changePasswordFormData)}
				/>
				<ButtonListWrapper
					buttonData={transformToArr(buttonData)}
					pageType="admin"
				/>
			</div>
		</AdminLayout>
	);
}

Profile.propType = {
	onLogoutHandler: PropTypes.func,
};
