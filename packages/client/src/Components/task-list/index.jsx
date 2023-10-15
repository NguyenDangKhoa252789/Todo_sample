/* eslint-disable react/prop-types */
import React from "react";
import Task from "../task";
import TodoContext from "../../context/TodoContextProvider";
import Container from "@mui/material/Container";

export default function TaskList({ selectedFilter }) {
  // eslint-disable-next-line no-unused-vars
  const { todoList, handleEditTodo, handleDeleteTodo } =
    React.useContext(TodoContext);

  const handleEdit = (taskId, editedTitle, newDone) => {
    handleEditTodo(taskId, editedTitle, newDone);
  };

  const handleDelete = (taskId) => {
    handleDeleteTodo(taskId);
  };

  const filteredTasks = todoList.filter((task) => {
    if (selectedFilter === "All") {
      return true;
    } else if (selectedFilter === "Incomplete") {
      return task.status === "Incomplete";
    } else if (selectedFilter === "Completed") {
      return task.status === "Completed";
    }
    return true;
  });

  return (
    <Container
      sx={{
        backgroundColor: "#ecedf6",
        borderRadius: "1rem",
        p: "0.625rem 1rem 2rem",
        mt: "0.5rem",
        maxheight: "100rem",
        overflow: "auto",
      }}
    >
      {filteredTasks.map((todo) => (
        <div key={todo.id}>
          <Task todo={todo} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      ))}
    </Container>
  );
}
