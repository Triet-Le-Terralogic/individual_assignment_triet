import React from "react";
import Proptypes from "prop-types";

export default function Button({
  pageType = "guess",
  buttonType = "button",
  buttonTitle = "Click!",
  isFull = true,
}) {
  const buttonStyle = isFull
    ? `Button-${pageType} Button-${pageType}--state-fulfill`
    : `Button-${pageType} Button-${pageType}--state-empty`;

  return (
    <button
      className={`${buttonStyle} btn btn-primary rounded-pill font-weight-bold `}
      type={buttonType}
    >
      {buttonTitle}
    </button>
  );
}

Button.propTypes = {
  pageType: Proptypes.oneOf(["guess", "admin"]),
  buttonType: Proptypes.oneOf(["button", "submit"]),
  buttonTitle: Proptypes.string.isRequired,
  isFull: Proptypes.bool,
};
