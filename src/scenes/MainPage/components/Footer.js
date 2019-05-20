import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

function Footer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
              Wojciech Moczydlowski Project
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const styles = theme => ({
  root: {      
    width:'100%',
    position: 'fixed',
    bottom: '0'
  }, 
  title: {
    display: "block",
  }

});

export default withStyles(styles)(Footer);
