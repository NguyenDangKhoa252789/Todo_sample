/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { TodoContextProvider } from "@context/TodoContextProvider";
import TodoPage from "@pages/tasks";
import Home from "@pages/home/index";
import LoginPage from "@pages/login";
import NotFound from "@pages/not-found";
import DetailPage from "@pages/tasks/details";

export default function App() {
  return (
    <TodoContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TodoPage />}>
          <Route path="/tasks/:id" element={<DetailPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notes" element="" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TodoContextProvider>
  );
}
