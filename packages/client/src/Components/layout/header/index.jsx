import React from "react";
import { Box } from "@components/mui-components";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { LOGIN_AND_SIGNUP } from "../../../constants/login_and_signup";
function Header() {
  return (
    <Box sx={{ backgroundColor: "red", height: "3.75rem" }}>
      {LOGIN_AND_SIGNUP.map((item) => {
        return (
          <AppBar position="static">
            <Toolbar>
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

              <Link Link to={item.link}>
                <Button color="inherit">{item.title}</Button>
              </Link>
            </Toolbar>
          </AppBar>
        );
      })}
    </Box>
  );
}

export default Header;
