/* eslint-disable react/prop-types */
import React from "react";
import "./Task.css";
import Task from "../task";
import TodoContext from "../../context/TodoContextProvider";

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
      return !task.done;
    } else if (selectedFilter === "Completed") {
      return task.done;
    }
    return true;
  });

  return (
    <div className="container">
      {filteredTasks.map((todo) => (
        <div key={todo.id}>
          <Task todo={todo} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}
