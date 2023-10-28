import * as React from "react";
import { useState } from "react";
import { Box, Modal, Grid } from "@components/mui-components";
import AddNewBtn from "@components/buttons/AddNewBtn";
import Selectbox from "@components/selectbox";
import AddTodo from "@components/add-todo/AddTodo";
import TodoContext from "@context/TodoContextProvider";
import ButtonCancel from "@components/buttons/ButtonCancel";
import TaskList from "@components/task-list";
import Title from "@components/title";
import MainLayout from "@components/layout";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: "flex",
};
function TodoPage() {
  const { handleAddTodo, open, handleOpen, handleClose } =
    React.useContext(TodoContext);
  // eslint-disable-next-line no-undef
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <MainLayout>
      <Grid
        container
        justify="center"
        alignItems={"center"}
        direction={"column"}
        sx={{ my: "5rem" }}
      >
        <Title />
        <Grid sx={{ display: "flex" }}>
          <AddNewBtn onClick={handleOpen} />
          <Selectbox setSelectedFilter={setSelectedFilter} />
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <AddTodo handleAddTodo={handleAddTodo} />
            <ButtonCancel onClick={handleClose} />
          </Box>
        </Modal>
        <TaskList selectedFilter={selectedFilter} />
      </Grid>
    </MainLayout>
  );
}
export default TodoPage;
