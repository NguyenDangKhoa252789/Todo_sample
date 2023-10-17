import { Button } from "@components/mui-components";
import { FaPlus } from "react-icons/fa6";

const ButtonSubmit = (props) => {
  return (
    <Button
      sx={{
        color: "white",
        backgroundColor: "#646ff0",
        p: "0.625rem",
        ml: "0.5rem",
        borderRadius: 2,
        fontSize: "2rem",
        ":hover": { color: "#0000005c" },
      }}
      variant="outlined"
      onClick={props.onClick}
    >
      <FaPlus />
    </Button>
  );
};

export default ButtonSubmit;
