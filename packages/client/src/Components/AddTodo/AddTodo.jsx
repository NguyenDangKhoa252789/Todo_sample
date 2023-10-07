import React, { useState } from "react";
import AddNewBtn2 from "../buttons/AddNewBtn2";
import "./AddTodo.css";
import TodoContext from "../../context/TodoContextProvider";

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const { handleClose } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <input
        className="textbox"
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <AddNewBtn2
        onClick={() => {
          setTitle("");
          onAddTodo(title);
          handleClose();
        }}
      />
    </React.Fragment>
  );
}
