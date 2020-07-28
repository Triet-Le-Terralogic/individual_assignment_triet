import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useDeepCompareEffect } from "use-deep-compare";

import AdminLayout from "../layouts/AdminLayout";
import AvatarAdmin from "../components/AvatarAdmin";
import AdminSection from "../components/AdminSection";
import trumpAvatar from "../assets/img/test_avatar.jpg";
import ButtonListWrapper from "../components/ButtonListWrapper";
import Modal from "../layouts/Modal";
import { isEqual } from "lodash";

import {
	transformToArr,
	initStateCreator,
	changePasswordValidator,
} from "../helper";

export default function Profile({
	onLogoutHandler = () => {},
	onChangePasswordHandler = () => {},
	onUploadAvatarHandler = () => {},
	userInfo = {},
	token = "",
}) {
	const changeUserInfoInitState = userInfo;
	const userInfoSnapShot = useRef(userInfo);
	const [canUserSaveState, setCanUserSaveState] = useState(false);
	const [changeUserInfoState, setChangeUserInfoState] = useState(
		changeUserInfoInitState
	);

	const mounted = useRef(false);
	useDeepCompareEffect(() => {
		if (!isEqual(changeUserInfoState, userInfoSnapShot) && mounted.current) {
			setCanUserSaveState(true);
			console.log("can save!");
		} else {
			mounted.current = true;
		}
	}, [changeUserInfoState]);

	const onSubmitFormHandler = () => {
		if (changePasswordValidator(formChangePasswordState)) {
			const changePassData = {
				token: token,
				passwordData: formChangePasswordState,
			};
			onChangePasswordHandler(changePassData);
		} else {
			// else popup invalid form
			setChangePasswordModalState(true);
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
				isDisabled: !canUserSaveState,
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

	// Create dynamic initState for change password and change user info fields
	const changePasswordInitState = initStateCreator(
		transformToArr(changePasswordFormData)
	);

	const [formChangePasswordState, setFormChangePasswordState] = useState(
		changePasswordInitState
	);
	const [changePasswordModalState, setChangePasswordModalState] = useState(
		false
	);

	// Set form's input state
	const onUserChangePasswordHandler = (val, name) => {
		setFormChangePasswordState((prevState) => ({
			...prevState,
			[name]: val,
		}));
	};

	const onUserChangeInfoHandler = (val, name) => {
		setChangeUserInfoState((prevState) => ({
			...prevState,
			[name]: val,
		}));
	};

	const onChangeAvatarHandler = (file) => {
		const fileData = {
			avatarFile: file,
			token,
		};
		onUploadAvatarHandler(fileData);
	};

	const avatarSrc =
		userInfo.avatar.length === 0 ? trumpAvatar : userInfo.avatar;

	const avatarAdmin = (
		<AvatarAdmin
			avatarTitle={userInfo.name}
			avatarImg={avatarSrc}
			onChangeAvatar={onChangeAvatarHandler}
		/>
	);
	return (
		<>
			<Modal
				modalHeader="Change password failed"
				modalBody="Invalid password/Confirm password does not match!"
				modalType="nofi"
				isShow={changePasswordModalState}
				denyFunc={() => setChangePasswordModalState(false)}
				acceptFunc={() => setChangePasswordModalState(false)}
			/>

			<AdminLayout>
				<div className="Profile container text-center text-lg-left">
					<AdminSection
						onUserInputHandler={onUserChangeInfoHandler}
						formInputstate={changeUserInfoState}
						sectionHeader={avatarAdmin}
						sectionData={transformToArr(infoFormData)}
					/>
					<AdminSection
						onUserInputHandler={onUserChangePasswordHandler}
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
	onUploadAvatarHandler: PropTypes.func,
	userInfo: PropTypes.object,
	token: PropTypes.string,
};
