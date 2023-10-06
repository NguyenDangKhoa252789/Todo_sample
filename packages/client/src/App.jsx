/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import Title from "./Components/title";
import BasicModal from "./Components/modal/modal";
import { Grid } from "@mui/material";
import TaskList from "./Components/task-list";

export default function App() {
  return (
    <React.Fragment>
      <Grid
        container
        justify="center"
        alignItems={"center"}
        direction={"column"}
      >
        <Title />
        <BasicModal />
        <TaskList />
      </Grid>
    </React.Fragment>
  );
}
