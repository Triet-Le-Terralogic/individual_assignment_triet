import React from "react";
import logo from "../../assets/img/brand_logo.svg";

export default function Logo() {
	return (
		<div className="Logo text-center text-lg-left">
			<img src={logo} alt="Brand logo" />
		</div>
	);
}
