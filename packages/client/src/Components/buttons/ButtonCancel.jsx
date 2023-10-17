import { Button } from "@components/mui-components";
import { FaPlus } from "react-icons/fa6";
const ButtonCancel = (props) => {
  return (
    <Button
      sx={{
        color: "White",
        backgroundColor: "red",
        p: "0.625rem",
        ml: "0.1rem",
        borderRadius: 2,
        fontSize: "2rem",
        ":hover": { color: "#0000005c" },
      }}
      variant="outlined"
      onClick={props.onClick}
    >
      <FaPlus style={{ transform: "rotate(45deg)" }} />
    </Button>
  );
};

export default ButtonCancel;
