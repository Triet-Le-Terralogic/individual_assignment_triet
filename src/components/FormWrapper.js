import React from "react";
import PropTypes from "prop-types";
import FormCell from "./FormCell";

export default function FormWrapper({
	onUserInputHandler = () => {},
	formInputstate = {},
	formTitle = "",
	formData = [],
}) {
	const inputList = formData.map((cell) => (
		<FormCell
			key={cell.id}
			onUserInputHandler={onUserInputHandler}
			customStyle={cell.customStyle}
			pageType={cell.pageType}
			inputID={cell.id}
			inputValue={formInputstate[cell.id]}
			inputType={cell.config.type}
			inputLabel={cell.config.label}
			inputPlaceholder={cell.config.placeholder}
			inputIcon={cell.config.icon}
		/>
	));

	return (
		<div className="Form-wrapper mx-auto">
			<h3 className="Form-wrapper__title">{formTitle}</h3>
			<div className="container p-0">
				<div className="row">{inputList}</div>
			</div>
		</div>
	);
}

FormWrapper.propTypes = {
	onUserInputHandler: PropTypes.func,
	formInputstate: PropTypes.object,
	formTitle: PropTypes.string,
	formData: PropTypes.array.isRequired,
};
