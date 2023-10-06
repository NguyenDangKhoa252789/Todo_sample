import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddNewBtn from "../Buttons/AddNewBtn";
import Selectbox from "../selectbox";
import './modal.css'

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
  const [open, setOpen] = React.useState(false);
  
  function handleOpen() {
    setOpen(true)
  }
  const handleClose = () => setOpen(false);
  // eslint-disable-next-line no-undef

  return (
    <div>
      <AddNewBtn onClick={handleOpen}/>
      <Selectbox/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            {/* <input type="text" className="textbox"/><AddNewBtn text={'Add new'}/> */}
        </Box>
      </Modal>
 
    </div>
  );
}
