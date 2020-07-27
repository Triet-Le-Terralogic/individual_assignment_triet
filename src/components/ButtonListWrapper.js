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
		/>
	));

	return (
		<div className={`Button-list-wrapper Button-list-wrapper-${pageType}`}>
			{buttonList}
		</div>
	);
}

ButtonListWrapper.propTypes = {
	pageType: PropTypes.oneOf(["guess", "admin"]),
	buttonData: PropTypes.arrayOf(PropTypes.object),
};
