/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import Title from "@components/title";
import BasicModal from "@pages/todo-management";
import { Grid } from "@components/mui-components";
import { TodoContextProvider } from "@context/TodoContextProvider";

export default function App() {
  return (
    <TodoContextProvider>
      <Grid
        container
        justify="center"
        alignItems={"center"}
        direction={"column"}
      >
        <Title />
        <BasicModal />
      </Grid>
    </TodoContextProvider>
  );
}
