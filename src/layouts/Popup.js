import React from "react";
import PropTypes from "prop-types";

export default function Popup({ isShow = false, children }) {
	return (
		<div className={isShow ? "Popup" : "Popup Popup--hide"}>{children}</div>
	);
}

Popup.propTypes = {
	isShow: PropTypes.bool,
};
