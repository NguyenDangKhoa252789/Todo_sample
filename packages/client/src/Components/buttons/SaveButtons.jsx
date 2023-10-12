import React from "react";
import { FaSave } from "react-icons/fa";
import "./Buttons.css";

const SaveButtons = (props) => {
  return (
    <button className="button-save" onClick={props.onClick}>
      <FaSave />
    </button>
  );
};

export default SaveButtons;
