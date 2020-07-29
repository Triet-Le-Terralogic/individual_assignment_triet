import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import eyeIcon from "../../assets/img/eye_icon.svg";
import { inputValidator } from "../../helper";

export default function FormCell({
	onUserInputHandler = () => {},
	pageType = "guess",
	inputID = "",
	inputValue = "",
	inputType = "text",
	inputLabel = "",
	inputPlaceholder = "",
	inputIcon = "",
	customStyle = "",
}) {
	const [reveal, setReveal] = useState(false);
	const [errMsg, setErrMsg] = useState("");

	const onRevealHandler = () => {
		setReveal(!reveal);
	};

	// Start validate when user stop typing 1 second
	const mounted = useRef(false);
	useEffect(() => {
		let validateTimeout;
		if (mounted.current) {
			// Similar to componentDidUpdate
			console.log("test");
			validateTimeout = setTimeout(() => {
				setErrMsg(inputValidator(inputValue, inputID));
			}, 1000);
		} else {
			mounted.current = true;
		}
		return () => {
			clearTimeout(validateTimeout);
		};
	}, [inputValue, inputID]);

	let errMsgToggle = errMsg.length ? "d-block" : "d-none";
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
			<div
				className={`Form-cell Form-cell-${pageType} form-group col-12 ${customStyle}`}
			>
				<label>{inputLabel}</label>
				<div className="input-group flex-nowrap">
					{pageType === "guess" && formCellGuessIconLeft}
					<input
						className={inputStyle}
						type={reveal ? "text" : inputType}
						value={inputValue}
						placeholder={inputPlaceholder}
						onChange={(event) =>
							onUserInputHandler(event.target.value, inputID)
						}
					/>
					{inputEyeIcon}
				</div>
				<span className={`text-center ${errMsgToggle}`}>{errMsg}</span>
			</div>
		</>
	);
}

FormCell.propTypes = {
	onUserInputHandler: PropTypes.func,
	pageType: PropTypes.oneOf(["guess", "admin"]),
	inputID: PropTypes.string.isRequired,
	inputType: PropTypes.oneOf(["email", "password", "text"]),
	inputLabel: PropTypes.string,
	inputPlaceholder: PropTypes.string,
	inputIcon: PropTypes.string, // In fact, inputIcon is a url string!
	customStyle: PropTypes.string,
};
