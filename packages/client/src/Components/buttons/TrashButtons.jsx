/* eslint-disable react/prop-types */
import { FaTrash } from "react-icons/fa";
import "./Buttons.css";

const TrashButtons = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types
    <button className="button-dusbin" onClick={props.onClick}>
      <FaTrash />
    </button>
  );
};

export default TrashButtons;
