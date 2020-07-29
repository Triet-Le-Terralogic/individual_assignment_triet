import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useDeepCompareEffect } from "use-deep-compare";

import AdminLayout from "../layouts/AdminLayout";
import AvatarAdmin from "../components/AvatarAdmin";
import AdminSection from "../components/AdminSection";
import trumpAvatar from "../assets/img/test_avatar.jpg";
import ButtonListWrapper from "../components/ButtonListWrapper";
import isEqual from "fast-deep-equal";

import {
	transformToArr,
	initStateCreator,
	changePasswordValidator,
	changeUserInfoValidator,
	uploadAvatarValidator,
} from "../helper";

export default function Profile({
	onLogoutHandler = () => {},
	onChangePasswordHandler = () => {},
	onUploadAvatarHandler = () => {},
	onUploadUserInfo = () => {},
	onTriggerNotificationHandler = () => {},
	userInfo = {},
	token = "",
}) {
	const changeUserInfoInitState = userInfo;
	const userInfoSnapShot = useRef(userInfo);
	const changePasswordSnapShot = useRef({
		currentPassword: "",
		newPassword: "",
		confirmPassword: "",
	});
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

	const [canUserSaveState, setCanUserSaveState] = useState(false);
	const [userInfoState, setUserInfoState] = useState(changeUserInfoInitState);
	// Create dynamic initState for change password and change user info fields
	const changePasswordInitState = initStateCreator(
		transformToArr(changePasswordFormData)
	);
	const [formChangePasswordState, setFormChangePasswordState] = useState(
		changePasswordInitState
	);

	const mounted = useRef(false);
	useDeepCompareEffect(() => {
		// // update userInfo snapshot when userinfo change
		userInfoSnapShot.current = userInfo;
		if (mounted.current) {
			if (
				!isEqual(userInfoState, userInfoSnapShot.current) ||
				!isEqual(formChangePasswordState, changePasswordSnapShot.current)
			) {
				setCanUserSaveState(true);
			} else {
				setCanUserSaveState(false);
			}
		} else {
			mounted.current = true;
		}
	}, [userInfoState, formChangePasswordState, userInfo]);

	const onSubmitFormHandler = () => {
		let isTriggered = 0;
		let triggerData = {
			header: "",
			body: "",
		};
		// Check if password field have changed? then validate.
		if (!isEqual(formChangePasswordState, changePasswordSnapShot.current)) {
			if (changePasswordValidator(formChangePasswordState)) {
				const changePassData = {
					token: token,
					passwordData: formChangePasswordState,
				};
				onChangePasswordHandler(changePassData);
			} else {
				// Popup invalid form
				triggerData.header = "Change password failed!";
				triggerData.body =
					"Invalid password or confirm password does not match.";
				isTriggered++;
			}
		}

		if (!isEqual(userInfoState, userInfoSnapShot.current)) {
			if (changeUserInfoValidator(userInfoState)) {
				const uploadUserInfoData = {
					token: token,
					dataUpload: userInfoState,
				};
				onUploadUserInfo(uploadUserInfoData);
			} else {
				// Popup invlaid form
				triggerData.header = "Change prifile failed!";
				triggerData.body = "Invalid name/email/phone.";
				isTriggered++;
			}
		}

		if (isTriggered === 2) {
			triggerData.header = "Notification!";
			triggerData.body = "Invalid password/name/email/phone.";
			onTriggerNotificationHandler(triggerData);
		} else if (isTriggered === 1) {
			onTriggerNotificationHandler(triggerData);
		}
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

	// Set form's input state
	const onUserChangePasswordHandler = (val, name) => {
		setFormChangePasswordState((prevState) => ({
			...prevState,
			[name]: val,
		}));
	};

	const onUserChangeInfoHandler = (val, name) => {
		setUserInfoState((prevState) => ({
			...prevState,
			[name]: val,
		}));
	};

	const onChangeAvatarHandler = (file) => {
		if (uploadAvatarValidator(file.name)) {
			const fileData = {
				avatarFile: file,
				token,
			};
			onUploadAvatarHandler(fileData);
		} else {
			// popup
		}
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
		<AdminLayout>
			<div className="Profile container text-center text-lg-left">
				<AdminSection
					onUserInputHandler={onUserChangeInfoHandler}
					formInputstate={userInfoState}
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
	);
}

Profile.propType = {
	onLogoutHandler: PropTypes.func,
	onChangePasswordHandler: PropTypes.func,
	onUploadAvatarHandler: PropTypes.func,
	onUploadUserInfo: PropTypes.func,
	onTriggerNotificationHandler: PropTypes.func,
	userInfo: PropTypes.object,
	token: PropTypes.string,
};
