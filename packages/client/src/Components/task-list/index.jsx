/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Task.css";
import Task from "../task";
export default function TaskList() {
  // eslint-disable-next-line no-unused-vars
  const [todoList, setTodoList] = useState([
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
  ]);
  return (
    <ul className="container">
      {todoList.map((todo) => (
        <li key={todo.id} className="unCheckedChange">
          <Task todo={todo} />
        </li>
      ))}
    </ul>
  );
}
