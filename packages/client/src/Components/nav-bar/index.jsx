import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
export default function ButtonAppBar() {
  const linkStyle = {
    textDecoration: "none", // This removes the underline
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AiOutlineMenu />
          </IconButton>
          <Grid sx={{ flexGrow: 1 }}>
            <Button>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
            </Button>
            <Button>
              <Link to="/todopage" style={linkStyle}>
                Todo
              </Link>
            </Button>
          </Grid>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
