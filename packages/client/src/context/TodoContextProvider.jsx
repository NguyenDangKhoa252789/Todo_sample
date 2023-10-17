import React, { createContext, useState, useCallback } from "react";
import { TASKS } from "../constants";
const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState(TASKS);

  const handleEditTodo = (taskId, editedTitle, status) => {
    const statusValue = status ? "Completed" : "Incomplete";
    const updatedTodoList = todoList.map((todo) =>
      todo.id === taskId
        ? { ...todo, name: editedTitle, status: statusValue }
        : todo
    );
    setTodoList(updatedTodoList);
  };

  const handleDeleteTodo = (taskId) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== taskId);
    setTodoList(updatedTodoList);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleAddTodo = (name) => {
    const nextId = todoList.length;
    setTodoList([
      ...todoList,
      {
        id: nextId,
        name: name,
        status: "Incomplete",
      },
    ]);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        handleAddTodo,
        open,
        handleOpen,
        handleClose,
        handleDeleteTodo,
        handleEditTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
export { TodoContextProvider };
