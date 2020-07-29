import React from "react";
import Proptypes from "prop-types";

export default function Button({
	onClickHandler = () => {},
	pageType = "guess",
	buttonType = "button",
	buttonTitle = "Click!",
	isFull = true,
	isDisabled = false,
}) {
	const buttonStyle = isFull
		? `Button-${pageType} Button-${pageType}--state-fulfill`
		: `Button-${pageType} Button-${pageType}--state-empty`;

	return (
		<button
			className={`${buttonStyle} btn btn-primary rounded-pill font-weight-bold `}
			type={buttonType}
			onClick={onClickHandler}
			disabled={isDisabled}
		>
			{buttonTitle}
		</button>
	);
}

Button.propTypes = {
	onClickHandler: Proptypes.func,
	pageType: Proptypes.oneOf(["guess", "admin", "modal"]),
	buttonType: Proptypes.oneOf(["button", "submit"]),
	buttonTitle: Proptypes.string.isRequired,
	isFull: Proptypes.bool,
	isDisabled: Proptypes.bool,
};
