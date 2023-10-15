/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

const AddNewBtn = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types
    <Button variant="contained" sx={{ color: "white" }} onClick={props.onClick}>
      {props.text ? props.text : "Add new task"}
    </Button>
  );
};
export default AddNewBtn;
