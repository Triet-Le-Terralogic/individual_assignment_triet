import React from "react";
import AvatarAdmin from "../components/AvatarAdmin";
import AdminSection from "../components/AdminSection";
import trumpAvatar from "../assets/img/test_avatar.jpg";
import { transformToArr } from "../helper";
import ButtonListWrapper from "../components/ButtonListWrapper";

export default function Profile() {
	const infoFormData = {
		fullName: {
			formType: "admin",
			customStyle: "col-lg-6 offset-reverse-6",
			config: {
				type: "text",
				label: "Full name",
				placeholder: "Your full name",
			},
		},
		password: {
			formType: "admin",
			customStyle: "col-lg-6",
			config: {
				type: "email",
				label: "Email",
				placeholder: "Your email",
			},
		},
		phone: {
			formType: "admin",
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
			formType: "admin",
			customStyle: "col-lg-6 offset-reverse-6",
			config: {
				type: "password",
				label: "Current password",
				placeholder: "Enter your current password",
			},
		},
		newPassword: {
			formType: "admin",
			customStyle: "col-lg-6",
			config: {
				type: "password",
				label: "New password",
				placeholder: "Enter your new password",
			},
		},
		confirmPassword: {
			formType: "admin",
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
			buttonType: "button",
			config: {
				isFull: true,
				title: "Save",
			},
		},
		submit: {
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
		<div className="Profile container text-center text-sm-left">
			<AdminSection
				sectionHeader={avatarAdmin}
				sectionData={transformToArr(infoFormData)}
			/>
			<AdminSection
				sectionHeader="Change Password"
				sectionData={transformToArr(changePasswordFormData)}
			/>
			<ButtonListWrapper buttonData={transformToArr(buttonData)} />
		</div>
	);
}
