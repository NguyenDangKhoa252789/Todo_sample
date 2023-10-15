import { useState } from "react";
import ButtonDelete from "../buttons/ButtonDelete";
import ButtonEdit from "../buttons/ButtonEdit";
import ButtonSave from "../buttons/ButtonSave";
import { Grid, TextField, Checkbox } from "@mui/material";

function Task({ todo, onDelete, onEdit }) {
  // const [isChecked, setIsChecked] = useState(todo.done);
  const [isChecked, setIsChecked] = useState(
    todo.status === "Incomplete" ? false : true
  );
  const [isEditing, setIsEditing] = useState(false);
  // const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedTitle, setEditedTitle] = useState(todo.name);

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
    <Grid
      sx={{
        background: isChecked ? "#ffffff" : "#a7a7a7",
        borderRadius: " 0.313rem",
        p: "1rem 1rem 1rem 0",
        m: "0.625rem 00.625rem 0.125rem",
        display: "flex",
      }}
    >
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {isEditing ? (
        <TextField
          size="small"
          sx={{ width: "36rem" }}
          value={editedTitle}
          onChange={handleTitleChange}
        />
      ) : (
        // <input type="text" value={editedTitle} className={place} size={45} />
        <Grid item xs={{ backgroundcolor: "#ffffff", my: "0.875rem" }}>
          <div
            style={{
              width: "36rem", // Adjust the width as needed
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              marginTop: "0.7rem",
            }}
          >
            {editedTitle}
          </div>
        </Grid>
      )}
      {isEditing ? (
        <ButtonSave onClick={handleSaveClick} />
      ) : (
        <ButtonEdit onClick={handleEditClick} />
      )}
      <ButtonDelete onClick={handleDeleteClick} />
    </Grid>
  );
}

export default Task;
