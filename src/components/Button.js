import React from "react";
import Proptypes from "prop-types";

export default function Button({
	pageType = "guess",
	buttonType = "button",
	buttonTitle = "Click!",
	isFull = true,
}) {
	let buttonStyle = "";
	if (pageType === "guess") {
		buttonStyle = isFull
			? `Button-guess Button-guess--state-fulfill`
			: `Button-guess Button-guess--state-empty`;
	}
	if (pageType === "admin") {
		buttonStyle = isFull
			? `Button-admin Button-admin--state-fulfill`
			: `Button-admin Button-admin--state-empty`;
	}

	return (
		<>
			<button
				className={`${buttonStyle} btn btn-primary rounded-pill font-weight-bold `}
				type={buttonType}
			>
				{buttonTitle}
			</button>
		</>
	);
}

Button.propTypes = {
	pageType: Proptypes.oneOf(["guess", "admin"]),
	buttonType: Proptypes.oneOf(["button", "submit"]),
	buttonTitle: Proptypes.string.isRequired,
	isFull: Proptypes.bool,
};
