import React, { createContext, useState, useCallback } from "react";
import { useMemo } from "react";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacosdwadawd", done: false },
    { id: 2, title: "Brew tea", done: false },
  ]);
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  function handleAddTodo(title) {
    let nextId = 3;
    setTodoList([
      ...todoList,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  const userValue = useMemo(
    () => ({ todoList, handleAddTodo, open, handleOpen, handleClose }),
    [todoList, open]
  );

  return (
    <TodoContext.Provider value={userValue}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContext;
export { TodoContextProvider };
