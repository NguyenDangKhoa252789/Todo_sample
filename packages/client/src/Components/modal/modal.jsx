import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddNewBtn from "../Buttons/AddNewBtn";
import Selectbox from "../selectbox";
import "./modal.css";
import AddTodo from "../AddTodo/AddTodo";
import TodoContext from "../../context/TodoContextProvider";
import AddNewBtn2 from "../buttons/AddNewBtn2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
export default function BasicModal() {
  const { handleAddTodo, open, handleOpen, handleClose } =
    React.useContext(TodoContext);
  // eslint-disable-next-line no-undef

  return (
    <div>
      <AddNewBtn onClick={handleOpen} />
      <Selectbox />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddTodo onAddTodo={handleAddTodo} />
          <AddNewBtn2 text={"Cancel"} onClick={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
