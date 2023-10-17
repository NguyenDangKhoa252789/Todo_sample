import React, { useState } from "react";
import ButtonSubmit from "@components/buttons/ButtonSubmit";
import TodoContext from "@context/TodoContextProvider";
import { TextField } from "@components/mui-components";

export default function AddTodo({ handleAddTodo }) {
  const [title, setTitle] = useState("");
  const { handleClose } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TextField
        id="outlined-basic"
        label="Add todo"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <ButtonSubmit
        onClick={() => {
          setTitle("");
          handleAddTodo(title);
          handleClose();
        }}
      />
    </React.Fragment>
  );
}
