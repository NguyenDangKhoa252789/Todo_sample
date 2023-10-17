import { FaSave } from "react-icons/fa";
import { IconButton } from "@components/mui-components";

const ButtonSave = (props) => {
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
      <FaSave />
    </IconButton>
  );
};

export default ButtonSave;
