import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function ButtonListWrapper({ buttonData = [] }) {
	const buttonList = buttonData.map((btn) => (
		<Button
			key={btn.id}
			buttonTitle={btn.config.title}
			isFull={btn.config.isFull}
			buttonType={btn.config.type}
		/>
	));
	return <div className="Button-list-wrapper">{buttonList}</div>;
}

ButtonListWrapper.propTypes = {
	buttonData: PropTypes.arrayOf(PropTypes.object),
};
