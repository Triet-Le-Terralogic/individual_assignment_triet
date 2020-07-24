import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function ButtonListWrapper({
	buttonData = [],
	pageType = "guess",
}) {
	const buttonList = buttonData.map((btn) => (
		<Button
			pageType={btn.pageType}
			key={btn.id}
			buttonTitle={btn.config.title}
			isFull={btn.config.isFull}
			buttonType={btn.buttonType}
		/>
	));
	let buttonListWrapperStyle = "";
	switch (pageType) {
		case "guess":
			buttonListWrapperStyle = "Button-list-wrapper-guess";
			break;
		case "admin":
			buttonListWrapperStyle = "Button-list-wrapper-admin";
			break;

		default:
			buttonListWrapperStyle = "Button-list-wrapper-guess";
	}
	return <div className={buttonListWrapperStyle}>{buttonList}</div>;
}

ButtonListWrapper.propTypes = {
	pageType: PropTypes.oneOf(["guess", "admin"]),
	buttonData: PropTypes.arrayOf(PropTypes.object),
};
