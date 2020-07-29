import React from "react";
import PropTypes from "prop-types";

export default function Popup({ isShow = false, children }) {
	return (
		<div className={`Popup ${isShow ? "Popup--show" : "Popup--hide"}`}>
			{children}
		</div>
	);
}

Popup.propTypes = {
	isShow: PropTypes.bool,
};
