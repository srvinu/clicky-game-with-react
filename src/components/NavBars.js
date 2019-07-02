import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";

const NavBars = props => (
  <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h3"
          fontWeight="fontWeightBold"
          color="inherit"
          noWrap
        >
          Clicky Game
        </Typography>
        <Typography
          variant="h4"
          style={{ position: "absolute", right: 50 }}
          color="inherit"
        >
          Score: {props.score} | Top Score: {props.topScore}
        </Typography>
        <Typography
          variant="h4"
          style={{ position: "absolute", right: 600 }}
          color="inherit"
        >
          {props.status}
        </Typography>
      </Toolbar>
    </AppBar>
  </>
);
export default NavBars;
