import SaveButtons from "../buttons/SaveButtons";
import TrashButtons from "../buttons/TrashButtons";
import PenButtons from "../buttons/PenButtons";
import "./task.css";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Task({ todo, onDelete, onEdit }) {
  const [isChecked, setIsChecked] = useState(todo.done);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const unCheckedChange = isChecked ? "checkedChange" : "unCheckedChange";
  const place = isChecked ? "place2" : "place";

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onEdit(todo.id, editedTitle, !isChecked);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(todo.id, editedTitle, isChecked);
    setIsEditing(false);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };
  return (
    <div id={unCheckedChange}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          className={"place2"}
          onChange={handleTitleChange}
          size={45}
        />
      ) : (
        <input type="text" value={editedTitle} className={place} size={45} />
      )}
      {isEditing ? (
        <SaveButtons onClick={handleSaveClick} />
      ) : (
        <PenButtons onClick={handleEditClick} />
      )}
      <TrashButtons onClick={handleDeleteClick} />
    </div>
  );
}

export default Task;
