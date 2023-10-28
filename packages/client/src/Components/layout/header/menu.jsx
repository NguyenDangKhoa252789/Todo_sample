import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FiMenu } from "react-icons/fi";
import { NAVBAR_ITEMS } from "../../../constants/common";
import { AiOutlineHome } from "react-icons/ai";
import { GrTask } from "react-icons/gr";
import { BiNotepad } from "react-icons/bi";
import { Link } from "react-router-dom";
export default function Menu() {
  const [state, setState] = React.useState(false);
  const handleDisplayIcon = React.useCallback((title) => {
    switch (title) {
      case "Home": {
        return <AiOutlineHome size={30} />;
      }
      case "Tasks": {
        return <GrTask size={30} />;
      }
      case "Notes": {
        return <BiNotepad size={30} />;
      }
      default: {
        return null;
      }
    }
  }, []);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {NAVBAR_ITEMS.map((item, index) => (
          <ListItem key={item.title} disablePadding>
            <Link
              style={{ textDecoration: "none", color: "black", width: "100%" }}
              to={item.link}
            >
              <ListItemButton>
                <ListItemIcon>{handleDisplayIcon(item.title)}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/*// ? Using this for User in future */}
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? "ITEM2" : "ITEM1"}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ color: "white" }}>
        <FiMenu size={35} />
      </Button>
      <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}
