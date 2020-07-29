import React from "react";
import HeaderAdmin from "./HeaderAdmin";

export default function AdminLayout(props) {
	return (
		<div className="Admin-layout container">
			<HeaderAdmin
				headerTitle="My Profile"
				headerInfo="Manage your profile and contact infomation."
			/>
			<>{props.children}</>
		</div>
	);
}
