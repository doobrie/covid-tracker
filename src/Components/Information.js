import React from "react";
import "./Information.css";

function Information(props) {
  return (
    <div class="information-box">
      <h3 class="information-title">{props.title}</h3>
      <p class="information-content">
        <strong>New</strong>: {props.new}
      </p>
      <p class="information-content">
        <strong>Total</strong>: {props.total}
      </p>
    </div>
  );
}

export default Information;
