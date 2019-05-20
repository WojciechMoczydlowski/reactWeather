import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Loading from "./Loading";
import CardHeader from "@material-ui/core/CardHeader";

const NextDayWeather = props => {
  const { classes, weather, gridSpecifier } = props;
  const { loading } = props;
  const rootClasses = `${classes.root} ${gridSpecifier}`;
  let {
    clouds: { all: clouds } = { all: 50 },
    wind: { speed: wind } = { speed: 0 },
    main: { temp: temperature, pressure } = { temp: 275, pressure: 0 },
    weather: [{ icon }] = [{ icon: "10d" }],
    dt: date = 0
  } = weather;
  return (
    <div className={rootClasses}>
      <Card className={classes.card}>
        {loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <CardHeader subheader={timeConverter(date)} />
            <div className={classes.contentWrapper}>
            <div className={classes.flexWrapper}>
              <CardContent className={classes.icons}>
                <div className={classes.iconWrapper}>
                  <i className="fas fa-cloud" />
                </div>
                <div className={classes.iconWrapper}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {clouds} %
                  </Typography>
                </div>
              </CardContent>
              <CardContent className={classes.icons}>
                <div className={classes.iconWrapper}>
                  <i className="fas fa-wind" />
                </div>
                <div className={classes.iconWrapper}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {wind} m/s
                  </Typography>
                </div>
              </CardContent>
              <CardContent className={classes.icons}>
                <div className={classes.iconWrapper}>
                  <i className="fas fa-tachometer-alt" />
                </div>
                <div className={classes.iconWrapper}>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    {pressure} hPa
                  </Typography>
                </div>
              </CardContent>
            </div>

            <Typography
              className={classes.temperature}
              color="textSecondary"
              gutterBottom
            >
              {Math.round(temperature - 273.15)} &#176;C
            </Typography>
            <div className={classes.imgWrapper}>
              <img
                alt="icon"
                src={`http://openweathermap.org/img/w/${icon}.png`}
                className={classes.weatherImg}
              />
            </div>
            </div>
          </React.Fragment>
        )}
      </Card>
    </div>
  );
};

const styles = theme => ({
  root: {
    display: "grid",
    margin: "0",
    width: "90%",
    height: "90%",
    justifySelf: "center",
    alignSelf: "end"
  },
  card: {

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  flexWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    maxWidth: '30%',
    paddingLeft:'3%',
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  icons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    flexDirection: "row"
  },
  iconWrapper: {
    padding:'5px',
  },
  temperature: {
    paddingTop: "20px",
    paddingLeft: "20px",
    fontSize: "60px",
    display: "flex",
    alignItems: "start",
    justifyContent: "center"
  },
  weatherImg: {
    width: "50%",
    // maxWidth: '100%',
    height: "100%",
     },
     imgWrapper: {
      width:'40%',
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }
});

NextDayWeather.propTypes = {
  classes: PropTypes.object.isRequired
};

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = date + " " + month + " " + year + " ";
  return time;
}

export default withStyles(styles)(NextDayWeather);
