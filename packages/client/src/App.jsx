/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { TodoContextProvider } from "@context/TodoContextProvider";
import TodoPage from "@pages/todo-management/index";
import Home from "@pages/Home-management/index";
import LoginPage from "./pages/login-management";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <TodoContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notes" element="" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TodoContextProvider>
  );
}
