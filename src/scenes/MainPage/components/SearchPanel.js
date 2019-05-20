import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { weatherInputChange } from "../../../redux/actions/searchWeatherActions";
import { fetchLongTimeWeather } from "../../../redux/actions/longTimeWeatherActions";
import { fetchTodayWeather } from "../../../redux/actions/todayWeatherActions";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

class SearchPanel extends Component {
  handleInput = event => {
    this.props.weatherInputChange(event.target.value);
  };
  handleSubmitButton = () => {
    this.props.fetchTodayWeather(this.props.cityName);
    this.props.fetchLongTimeWeather(this.props.cityName);
    this.props.weatherInputChange('');
  };

  render() {
    const { classes } = this.props;
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
              Weather App
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="City..."
                onChange={this.handleInput}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleSubmitButton()}
              className={classes.button}
            >
              Search
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%"
  },
  grow: {
    flexGrow: 1
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  button: {
    margin: theme.spacing.unit
  }
});

const mapStateToProps = state => ({
  cityName: state.searchWeather.cityName
});

const mapDispatchToProps = dispatch => {
  return {
    fetchTodayWeather: cityName => {
      dispatch(fetchTodayWeather(cityName));
    },
    fetchLongTimeWeather: cityName => {
      dispatch(fetchLongTimeWeather(cityName));
    },
    weatherInputChange: cityName => {
      dispatch(weatherInputChange(cityName));
    }
  };
};

SearchPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(SearchPanel);
