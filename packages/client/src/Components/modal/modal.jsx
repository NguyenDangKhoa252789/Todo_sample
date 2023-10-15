import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddNewBtn from "../buttons/AddNewBtn";
import Selectbox from "../selectbox";
import AddTodo from "../AddTodo/AddTodo";
import TodoContext from "../../context/TodoContextProvider";
import ButtonCancel from "../buttons/ButtonCancel";
import TaskList from "../task-list";
import { Grid } from "@mui/material";

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
export default function BasicModal() {
  const { handleAddTodo, open, handleOpen, handleClose } =
    React.useContext(TodoContext);
  // eslint-disable-next-line no-undef
  const [selectedFilter, setSelectedFilter] = useState("All");

  return (
    <Grid>
      <Grid sx={{ display: "flex" }}>
        <AddNewBtn onClick={handleOpen} />
        <Selectbox onSelectFilter={setSelectedFilter} />
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddTodo onAddTodo={handleAddTodo} />
          <ButtonCancel onClick={handleClose} />
        </Box>
      </Modal>
      <TaskList selectedFilter={selectedFilter} />
    </Grid>
  );
}
