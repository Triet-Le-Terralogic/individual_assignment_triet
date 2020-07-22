import React from "react";
import PropTypes from "prop-types";

export default function CheckBox({ checkBoxTitle = "Default" }) {
  return (
    <div className="Check-box">
      <input type="checkbox" name="isChecked" value={true} />
      <span className="Check-box--custom"></span>
      <label htmlFor="isChecked">{checkBoxTitle}</label>
    </div>
  );
}

CheckBox.propTypes = {
  checkBoxTitle: PropTypes.string.isRequired,
};
