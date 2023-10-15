import React, { createContext, useState, useCallback } from "react";
import { TASKS } from "../constants";
const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState(TASKS);

  const handleEditTodo = (taskId, editedTitle, newDone) => {
    const status = newDone ? "Completed" : "Incomplete";
    const updatedTodoList = todoList.map((todo) =>
      todo.id === taskId ? { ...todo, name: editedTitle, status: status } : todo
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

  const handleAddTodo = (title) => {
    const nextId = todoList.length;
    setTodoList([
      ...todoList,
      {
        id: nextId,
        title: title,
        done: false,
      },
    ]);
  };

  // const userValue = useMemo(
  //   () => ({ todoList, handleAddTodo, open, handleOpen, handleClose }),
  //   [todoList, open]
  // );

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
