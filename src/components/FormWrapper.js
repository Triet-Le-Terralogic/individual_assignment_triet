import React from "react";
import PropTypes from "prop-types";
import FormCell from "./FormCell";
import ButtonListWrapper from "./ButtonListWrapper";

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

	return (
		<div className="Form-wrapper mx-auto">
			<h3 className="Form-wrapper__title">{formTitle}</h3>
			<div className="container p-0">
				<div className="row">{inputList}</div>
			</div>
			<ButtonListWrapper buttonData={buttonData} />
		</div>
	);
}

FormWrapper.propTypes = {
	formTitle: PropTypes.string,
	formData: PropTypes.array.isRequired,
	buttonData: PropTypes.array,
};
