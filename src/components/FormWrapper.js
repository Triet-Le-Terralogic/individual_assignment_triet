import React from "react";
import PropTypes from "prop-types";
import FormCell from "./FormCell";
import Button from "./Button";

export default function FormWrapper({
  formTitle = "Form title",
  formData = [],
  buttonData = [],
}) {
  const inputList = formData.map((cell) => (
    <FormCell
      key={cell.inputID}
      inputType={cell.inputType}
      inputLabel={cell.inputLabel}
      inputPlaceholder={cell.inputPlaceholder}
      inputIcon={cell.inputIcon}
    />
  ));

  const buttonList = buttonData.map((btn) => (
    <Button
      key={btn.buttonID}
      buttonTitle={btn.buttonTitle}
      isFull={btn.isFull}
      buttonType={btn.buttonType}
    />
  ));

  return (
    <div className="Form-wrapper">
      <span>Start your personal photo experient</span>
      <h3 className="Form-wrapper__title">{formTitle}</h3>
      {inputList}
      {buttonList}
    </div>
  );
}

FormWrapper.propTypes = {
  formTitle: PropTypes.string.isRequired,
  formData: PropTypes.array.isRequired,
  buttonData: PropTypes.array.isRequired,
};
