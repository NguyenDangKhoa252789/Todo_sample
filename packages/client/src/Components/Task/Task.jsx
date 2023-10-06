import "./Task.css";
import { PenButtons, TrashButtons } from "../buttons/Buttons";

const Task = () => {
  return (
    <div className="container">
      <ul>
        <li>
          <input type="checkbox" name="Task1" id="1" />
          <input
            type="text"
            size={42}
            className="place"
            value={"Learn javascript"}
          />
          <PenButtons />
          <TrashButtons />
        </li>
        <li>
          <input type="checkbox" name="Task2" id="2" />
          <input type="text" size={42} className="place" />
          <PenButtons />
          <TrashButtons />
        </li>
        <li>
          <input type="checkbox" name="Task3" id="3" />
          <input type="text" size={42} className="place" />
          <PenButtons />
          <TrashButtons />
        </li>
      </ul>
    </div>
  );
};

export default Task;
