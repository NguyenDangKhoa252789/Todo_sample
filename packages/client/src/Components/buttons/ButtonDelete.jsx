import React from "react";
import { FaTrash } from "react-icons/fa";
import { IconButton } from "@mui/material";
const ButtonDelete = (props) => {
  return (
    <IconButton
      sx={{
        color: "#000000",
        backgroundColor: "#eeeeee",
        p: "0.625rem",
        ml: "0.3rem",
        borderRadius: 2,
        fontSize: "1rem",
        ":hover": { color: "red" },
      }}
      onClick={props.onClick}
    >
      <FaTrash widths={1} />
    </IconButton>
  );
};

export default ButtonDelete;
