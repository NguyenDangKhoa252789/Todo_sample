import { useCallback, useState } from "react";
import ButtonDelete from "@components/buttons/ButtonDelete";
import ButtonEdit from "@components/buttons/ButtonEdit";
import ButtonSave from "@components/buttons/ButtonSave";
import { Grid, Checkbox, TextField } from "@components/mui-components";
import { Link } from "react-router-dom";
function Task({ todo, handleDelete, handleEdit }) {
  // const [isChecked, setIsChecked] = useState(todo.done);
  const [isChecked, setIsChecked] = useState(
    todo.status === "Incomplete" ? false : true
  );
  const [isEditing, setIsEditing] = useState(false);
  // const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedTitle, setEditedTitle] = useState(todo.name);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    handleEdit(todo.id, editedTitle, !isChecked);
    setIsEditing(false);
  };

  const handleEditClick = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSaveClick = () => {
    handleEdit(todo.id, editedTitle, isChecked);
    setIsEditing(false);
  };

  const handleTitleChange = useCallback((e) => {
    setEditedTitle(e.target.value);
  }, []);

  const handleDeleteClick = () => {
    handleDelete(todo.id);
  };
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          background: isChecked ? "#ffffff" : "#a7a7a7",
          borderRadius: " 0.313rem",
          p: "1rem ",
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
          <Grid
            item
            xs={12}
            sx={{ backgroundcolor: "#ffffff", my: "0.875rem" }}
          >
            <Link
              style={{ textDecoration: "none", color: "black", width: "100%" }}
              to={"/tasks/" + todo.id}
            >
              <div
                style={{
                  width: "36rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {editedTitle}
              </div>
            </Link>
          </Grid>
        )}
        {isEditing ? (
          <ButtonSave onClick={handleSaveClick} />
        ) : (
          <ButtonEdit onClick={handleEditClick} />
        )}
        <ButtonDelete onClick={handleDeleteClick} />
      </Grid>
    </Grid>
  );
}

export default Task;
