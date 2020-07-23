import React from "react";
import PropTypes from "prop-types";
import FormCell from "./FormCell";
import Button from "./Button";

export default function FormWrapper({
	formTitle = "",
	formData = [],
	buttonData = [],
}) {
	const inputList = formData.map((cell) => (
		<FormCell
			customStyle={cell.customStyle}
			formType={cell.formType}
			key={cell.id}
			inputType={cell.config.type}
			inputLabel={cell.config.label}
			inputPlaceholder={cell.config.placeholder}
			inputIcon={cell.config.icon}
		/>
	));

	const buttonList = buttonData.map((btn) => (
		<Button
			key={btn.id}
			buttonTitle={btn.config.title}
			isFull={btn.config.isFull}
			buttonType={btn.config.type}
		/>
	));

	return (
		<div className="Form-wrapper mx-auto">
			<h3 className="Form-wrapper__title">{formTitle}</h3>
			<div className="container p-0">
				<div className="row">{inputList}</div>
			</div>
			<div className="Button__list">{buttonList}</div>
		</div>
	);
}

FormWrapper.propTypes = {
	formTitle: PropTypes.string,
	formData: PropTypes.array.isRequired,
	buttonData: PropTypes.array,
};
