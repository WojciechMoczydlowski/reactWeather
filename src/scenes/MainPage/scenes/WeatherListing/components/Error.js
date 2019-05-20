import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from "@material-ui/core/styles";

class PositionedSnackbar extends React.Component {
  state = {
    open: true,
    vertical: 'top',
    horizontal: 'center',
  };

  handleClick = state => () => {
      console.log('true');
    this.setState({ open: true, ...state });
  };

  handleClose = state => {
    console.log('false');
    this.setState({ open: false});
  };

  render() {
     console.log('error');
  
    const { vertical, horizontal, open } = this.state;
    // console.log(open);
    const {classes} = this.props;
    return (
      <div className = {classes.root}>
        <Snackbar
         bodyStyle={{ backgroundColor: 'red', color: 'coral' }}
          classes = {classes.root}
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Wrong city!</span>}
        />
      </div>
    );
  }
}

const styles = theme => ({
    root: {      
        position:'absolute',
        zIndex: '10',
    },
    error: {
        backgroundColor: 'red',

    }
  });
  
export default withStyles(styles)(PositionedSnackbar);
