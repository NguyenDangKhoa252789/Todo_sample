import React, { createContext, useState, useCallback } from "react";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacosdwadawd", done: false },
    { id: 2, title: "Brew tea", done: false },
  ]);
  console.log(todoList);

  const handleEditTodo = (taskId, editedTitle, newDone) => {
    const updatedTodoList = todoList.map((todo) =>
      todo.id === taskId ? { ...todo, title: editedTitle, done: newDone } : todo
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
