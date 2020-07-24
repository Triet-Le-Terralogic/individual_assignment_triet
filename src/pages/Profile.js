import React from "react";
import AvatarAdmin from "../components/AvatarAdmin";
import AdminSection from "../components/AdminSection";
import trumpAvatar from "../assets/img/test_avatar.jpg";
import { transformToArr } from "../helper";
import ButtonListWrapper from "../components/ButtonListWrapper";

export default function Profile() {
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
				type: "tel",
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
			},
		},
		submit: {
			pageType: "admin",
			buttonType: "button",
			config: {
				isFull: false,
				title: "Log Out",
			},
		},
	};

	const avatarAdmin = (
		<AvatarAdmin avatarTitle="donald trump" avatarImg={trumpAvatar} />
	);
	return (
		<div className="Profile container text-center text-lg-left">
			<AdminSection
				sectionHeader={avatarAdmin}
				sectionData={transformToArr(infoFormData)}
			/>
			<AdminSection
				sectionHeader="Change Password"
				sectionData={transformToArr(changePasswordFormData)}
			/>
			<ButtonListWrapper
				buttonData={transformToArr(buttonData)}
				pageType="admin"
			/>
		</div>
	);
}
