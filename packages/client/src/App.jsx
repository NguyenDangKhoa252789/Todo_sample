/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { TodoContextProvider } from "@context/TodoContextProvider";
import ButtonAppBar from "./Components/nav-bar";
import TodoPage from "./pages/todo-management/index";
import Home from "./pages/Home-management/index";

export default function App() {
  return (
    <TodoContextProvider>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todopage" element={<TodoPage />} />
      </Routes>
    </TodoContextProvider>
  );
}
