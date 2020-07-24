import React, { useState } from "react";
import PropTypes from "prop-types";
import eyeIcon from "../assets/img/eye_icon.svg";

export default function FormCell({
	pageType = "guess",
	inputType = "text",
	inputLabel = "default",
	inputPlaceholder = "default",
	inputIcon = "",
	customStyle = "",
}) {
	const [reveal, setReveal] = useState(false);

	const onRevealHandler = () => {
		setReveal(!reveal);
	};

	let dynamicEyeIcon = "";
	switch (pageType) {
		case "guess":
			dynamicEyeIcon = "guess";
			break;
		case "admin":
			dynamicEyeIcon = "admin";
			break;
		default:
			dynamicEyeIcon = "";
	}

	let inputStyle = inputType === "file" ? "form-control-file" : "form-control";
	let inputEyeIcon = null;

	if (inputType === "password" || (inputType === "text" && reveal)) {
		inputStyle =
			pageType === "guess" ? `${inputStyle} border-right-0` : inputStyle;

		inputEyeIcon = (
			<div
				className={`Form-cell-${dynamicEyeIcon}__icon-right input-group-prepend`}
				onClick={() => onRevealHandler()}
			>
				<img src={eyeIcon} alt="Eye icon" />
			</div>
		);
	}

	const formCellGuess = (
		<div className={`Form-cell-guess form-group col-12 ${customStyle}`}>
			<label>{inputLabel}</label>
			<div className="input-group flex-nowrap">
				<div className="Form-cell-guess__icon-left input-group-prepend">
					<img src={inputIcon} alt={`${inputLabel}'s icon`} />
				</div>
				<input
					className={inputStyle}
					type={reveal ? "text" : inputType}
					placeholder={inputPlaceholder}
				/>
				{inputEyeIcon}
			</div>
		</div>
	);

	const formCellAdmin = (
		<div className={`Form-cell-admin form-group col-12 ${customStyle}`}>
			<label>{inputLabel}</label>
			<div className="input-group flex-nowrap">
				<input
					className={inputStyle}
					type={reveal ? "text" : inputType}
					placeholder={inputPlaceholder}
				/>
				{inputEyeIcon}
			</div>
		</div>
	);

	return (
		<>
			{pageType === "guess" && formCellGuess}
			{pageType === "admin" && formCellAdmin}
		</>
	);
}

FormCell.propTypes = {
	pageType: PropTypes.oneOf(["guess", "admin"]),
	inputType: PropTypes.oneOf(["email", "password", "text", "tel", "file"]),
	inputLabel: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	inputIcon: PropTypes.string, // In fact, inputIcon is a url string!
	customStyle: PropTypes.string,
};
