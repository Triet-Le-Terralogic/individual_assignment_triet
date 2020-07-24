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

	let inputStyle = "form-control";
	let inputEyeIcon = null;

	if (inputType === "password" || (inputType === "text" && reveal)) {
		inputStyle =
			pageType === "guess" ? `${inputStyle} border-right-0` : inputStyle;

		inputEyeIcon = (
			<div
				className={`Form-cell-${pageType}__icon-right input-group-prepend`}
				onClick={() => onRevealHandler()}
			>
				<img src={eyeIcon} alt="Eye icon" />
			</div>
		);
	}

	const formCellGuessIconLeft = (
		<div className="Form-cell-guess__icon-left input-group-prepend">
			<img src={inputIcon} alt={`${inputLabel}'s icon`} />
		</div>
	);

	return (
		<>
			<div className={`Form-cell-${pageType} form-group col-12 ${customStyle}`}>
				<label>{inputLabel}</label>
				<div className="input-group flex-nowrap">
					{pageType === "guess" && formCellGuessIconLeft}
					<input
						className={inputStyle}
						type={reveal ? "text" : inputType}
						placeholder={inputPlaceholder}
					/>
					{inputEyeIcon}
				</div>
			</div>
		</>
	);
}

FormCell.propTypes = {
	pageType: PropTypes.oneOf(["guess", "admin"]),
	inputType: PropTypes.oneOf(["email", "password", "text", "tel"]),
	inputLabel: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	inputIcon: PropTypes.string, // In fact, inputIcon is a url string!
	customStyle: PropTypes.string,
};
