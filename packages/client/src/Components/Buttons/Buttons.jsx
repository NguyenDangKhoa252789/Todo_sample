import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import "./Buttons.css";

function PenButtons() {
  return (
    <button className="button-pen">
      <FaPen />
    </button>
  );
}

function TrashButtons() {
  return (
    <button className="button-dusbin">
      <FaTrash />
    </button>
  );
}

export { PenButtons, TrashButtons };
