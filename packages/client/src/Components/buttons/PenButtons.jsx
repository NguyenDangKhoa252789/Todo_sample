import { FaPen } from "react-icons/fa";
import "./Buttons.css";

const PenButtons = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types
    <button className="button-pen" onClick={props.onClick}>
      <FaPen />
    </button>
  );
};

export default PenButtons;
