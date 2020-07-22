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
      <span>Start your personal photo experient</span>
      <h3 className="Form-wrapper__title">{formTitle}</h3>
      {inputList}
      <div className="Button__list">{buttonList}</div>
    </div>
  );
}

FormWrapper.propTypes = {
  formTitle: PropTypes.string.isRequired,
  formData: PropTypes.array.isRequired,
  buttonData: PropTypes.array.isRequired,
};
