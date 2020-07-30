import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="Loading-spinner" data-test="spinner">
      <div className="Loading-spinner__item" data-test="spinner-item">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
