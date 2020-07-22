import React, { useState } from "react";
import PropTypes from "prop-types";
import eyeIcon from "../assets/img/eye_icon.svg";

export default function FormCell({
  inputType = "text",
  inputLabel = "default",
  inputPlaceholder = "default",
  inputIcon = null,
}) {
  const [reveal, setReveal] = useState(false);

  const onRevealHandler = () => {
    setReveal(!reveal);
  };

  let inputStyle = inputType === "file" ? "form-control-file" : "form-control";
  let inputEyeIcon = null;

  if (inputType === "password" || (inputType === "text" && reveal)) {
    inputStyle = `${inputStyle} border-right-0`;

    inputEyeIcon = (
      <div
        className="Form-cell__icon--right input-group-prepend"
        onClick={() => onRevealHandler()}
      >
        <img src={eyeIcon} alt="Eye icon" />
      </div>
    );
  }

  return (
    <div className="Form-cell form-group">
      <label>{inputLabel}</label>
      <div className="input-group flex-nowrap">
        <div className="Form-cell__icon--left input-group-prepend">
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
}

FormCell.propTypes = {
  inputType: PropTypes.string,
  inputLabel: PropTypes.string,
  inputPlaceholder: PropTypes.string,
  inputIcon: PropTypes.string, // In fact, inputIcon is a url string!
};
