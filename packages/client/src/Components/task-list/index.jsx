/* eslint-disable react/prop-types */
import React from "react";
import "./Task.css";
import Task from "../task";
import TodoContext from "../../context/TodoContextProvider";
export default function TaskList() {
  // eslint-disable-next-line no-unused-vars
  const { todoList } = React.useContext(TodoContext);
  return (
    <div className="container">
      {todoList.map((todo) => (
        <div key={todo.id}>
          <Task todo={todo} />
        </div>
      ))}
    </div>
  );
}
