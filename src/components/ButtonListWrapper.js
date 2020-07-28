import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function ButtonListWrapper({
	buttonData = [],
	pageType = "guess",
}) {
	const buttonList = buttonData.map((btn) => (
		<Button
			onClickHandler={btn.config.onClickHandler}
			pageType={btn.pageType}
			key={btn.id}
			buttonTitle={btn.config.title}
			isFull={btn.config.isFull}
			buttonType={btn.buttonType}
			isDisabled={
				typeof btn.config.isDisabled !== "undefined"
					? btn.config.isDisabled
					: false
			}
		/>
	));

	return (
		<div className={`Button-list-wrapper Button-list-wrapper-${pageType}`}>
			{buttonList}
		</div>
	);
}

ButtonListWrapper.propTypes = {
	pageType: PropTypes.oneOf(["guess", "admin", "modal"]),
	buttonData: PropTypes.arrayOf(PropTypes.object),
};
