import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading(props) {
  const {classes} = props;
  return <div className = {classes.root}>
    <CircularProgress/>
  </div>;
}

const styles = theme => ({
  root: {      
    width:'100%',
    height:'100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default withStyles(styles)(Loading);
