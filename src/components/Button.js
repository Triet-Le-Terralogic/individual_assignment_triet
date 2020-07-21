import React from "react";
import Proptypes from "prop-types";

export default function Button({
  buttonType = "text",
  buttonTitle = "Click!",
  isFull = true,
}) {
  const buttonStyle = isFull ? "Button--state-fulfill" : "Button--state-empty";
  return (
    <>
      <button
        className={`Button ${buttonStyle} btn btn-primary rounded-pill font-weight-bold `}
        type={buttonType}
      >
        {buttonTitle}
      </button>
    </>
  );
}

Button.propTypes = {
  buttonType: Proptypes.string.isRequired,
  buttonTitle: Proptypes.string.isRequired,
  isFull: Proptypes.bool,
};
