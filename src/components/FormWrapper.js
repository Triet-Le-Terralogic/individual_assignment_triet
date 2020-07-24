import React from "react";
import PropTypes from "prop-types";
import FormCell from "./FormCell";
import ButtonListWrapper from "./ButtonListWrapper";

export default function FormWrapper({
	pageType = "guess",
	formTitle = "",
	formData = [],
	buttonData = [],
}) {
	const inputList = formData.map((cell) => (
		<FormCell
			customStyle={cell.customStyle}
			pageType={cell.pageType}
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
			<ButtonListWrapper buttonData={buttonData} pageType={pageType} />
		</div>
	);
}

FormWrapper.propTypes = {
	pageType: PropTypes.oneOf(["guess", "admin"]),
	formTitle: PropTypes.string,
	formData: PropTypes.array.isRequired,
	buttonData: PropTypes.array,
};
