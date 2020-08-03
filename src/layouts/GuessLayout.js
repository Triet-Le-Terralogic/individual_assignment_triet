import React from "react";
import bitmap from "../assets/img/solution_experts.png";

export default function GuessLayout({ children = "default" }) {
  return (
    <div className="Guess-layout container">
      <div className="row">
        <div
          className="col-lg-5 mb-5 mb-lg-0"
          data-test="guess-layout-children"
        >
          {children}
        </div>
        <div className="Guess-layout__bitmap offset-xl-1 col-xl-5 col-lg-6 d-none d-lg-block">
          <img src={bitmap} alt="bitmap" />
        </div>
      </div>
    </div>
  );
}
