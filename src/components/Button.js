import React from "react";
import Proptypes from "prop-types";

export default function Button({
  type = "text",
  title = "Click!",
  isFull = true,
}) {
  const buttonStyle = isFull ? "Button--state-fulfill" : "Button--state-empty";
  return (
    <div>
      <button
        className={`Button ${buttonStyle} btn btn-primary rounded-pill font-weight-bold `}
        type={type}
      >
        {title}
      </button>
    </div>
  );
}

Button.propTypes = {
  type: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  isFull: Proptypes.bool,
};
