import React from "react";
import bitmap from "../assets/img/solution_experts.png";

export default function GuessLayout(props) {
  return (
    <div className="Guess-layout container">
      <div className="row">
        <div className="col-lg-5 mb-5 mb-lg-0">{props.children}</div>
        <div className="Guess-layout__bitmap offset-lg-1 col-lg-6">
          <img src={bitmap} alt="bitmap" />
        </div>
      </div>
    </div>
  );
}
