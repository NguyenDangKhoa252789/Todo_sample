import React from "react";
import { Box } from "@components/mui-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Menu from "./menu";
function Header() {
  return (
    <Box sx={{ backgroundColor: "red", height: "3.75rem" }}>
      <AppBar position="static">
        <Toolbar>
          <Menu />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UTILS
          </Typography>
          <Link to={"/login"}>
            <Button sx={{ color: "white" }}>Login</Button>
          </Link>
          <Link to={"/user"}>
            <Button sx={{ color: "white" }}>User</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
