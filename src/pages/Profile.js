import React, { useState } from "react";
import PropTypes from "prop-types";
import AdminLayout from "../layouts/AdminLayout";
import AvatarAdmin from "../components/AvatarAdmin";
import AdminSection from "../components/AdminSection";
import trumpAvatar from "../assets/img/test_avatar.jpg";
import ButtonListWrapper from "../components/ButtonListWrapper";
import Modal from "../layouts/Modal";

import {
	transformToArr,
	initStateCreator,
	changePasswordValidator,
} from "../helper";

export default function Profile({
	onLogoutHandler = () => {},
	onChangePasswordHandler = () => {},
	userInfo = {},
	token = "",
}) {
	const onSubmitFormHandler = () => {
		if (changePasswordValidator(formChangePasswordState)) {
			const changePassData = {
				token: token,
				passwordData: formChangePasswordState,
			};
			onChangePasswordHandler(changePassData);
		} else {
			// else popup invalid form
			setModalState(true);
		}
	};

	const infoFormData = {
		name: {
			pageType: "admin",
			customStyle: "col-lg-6 offset-reverse-6",
			config: {
				type: "text",
				label: "Full name",
				placeholder: "Your full name",
			},
		},
		email: {
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
	const [modalState, setModalState] = useState(false);

	// set form's input state
	const onUserInputHandler = (val, name) => {
		setFormChangePasswordState((prevState) => ({
			...prevState,
			[name]: val,
		}));
	};

	const avatarAdmin = (
		<AvatarAdmin avatarTitle={userInfo.name} avatarImg={trumpAvatar} />
	);
	return (
		<>
			<Modal
				modalHeader="Change password failed"
				modalBody="Invalid password/Confirm password does not match!"
				modalType="nofi"
				isShow={modalState}
				denyFunc={() => setModalState(false)}
				acceptFunc={() => setModalState(false)}
			/>
			<AdminLayout>
				<div className="Profile container text-center text-lg-left">
					<AdminSection
						sectionHeader={avatarAdmin}
						sectionData={transformToArr(infoFormData)}
						formInputstate={userInfo}
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
		</>
	);
}

Profile.propType = {
	onLogoutHandler: PropTypes.func,
	onChangePasswordHandler: PropTypes.func,
	userInfo: PropTypes.object,
	token: PropTypes.string,
};
