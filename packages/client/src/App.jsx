/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import BasicModal from "@pages/todo-management";
import { TodoContextProvider } from "@context/TodoContextProvider";

export default function App() {
  return (
    <TodoContextProvider>
      <BasicModal />
    </TodoContextProvider>
  );
}
