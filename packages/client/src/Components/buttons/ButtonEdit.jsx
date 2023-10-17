import { FaPen } from "react-icons/fa";
import { IconButton } from "@components/mui-components";

const ButtonEdit = (props) => {
  return (
    <IconButton
      sx={{
        color: "#000000",
        backgroundColor: "#eeeeee",
        p: "0.625rem",
        ml: "2.5rem",
        borderRadius: 2,
        fontSize: "1rem",
        ":hover": { color: "blue" },
      }}
      onClick={props.onClick}
    >
      <FaPen />
    </IconButton>
  );
};

export default ButtonEdit;
