import { PenButtons, TrashButtons } from "../buttons/Buttons";
import "./task.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Task({ todo }) {
  const [isChecked, setIsChecked] = useState(false);
  const unCheckedChange = isChecked ? "checkedChange" : "unCheckedChange";
  const place = isChecked ? "place2" : "place";
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div id={unCheckedChange}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <input type="text" value={todo.title} className={place} />
      <PenButtons />
      <TrashButtons />
    </div>
  );
}

export default Task;
