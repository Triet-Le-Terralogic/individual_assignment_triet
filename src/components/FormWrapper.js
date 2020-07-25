import React, { useState } from "react";
import PropTypes from "prop-types";
import FormCell from "./FormCell";
import { initStateCreator } from "../helper";

export default function FormWrapper({ formTitle = "", formData = [] }) {
  // Create dynamic initState
  const initialState = initStateCreator(formData);
  const [formInputstate, setFormInputState] = useState(initialState);

  // set form's input state
  const onUserInputHandler = (val, name) => {
    setFormInputState((prevState) => ({
      ...prevState,
      [name]: val,
    }));
  };

  // Validate form
  const validateFormCell = (input = "", type = "") => {
    console.log({ input, type });
    return "test";
  };

  const inputList = formData.map((cell) => (
    <FormCell
      key={cell.id}
      validateHandler={validateFormCell}
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
  formTitle: PropTypes.string,
  formData: PropTypes.array.isRequired,
};
