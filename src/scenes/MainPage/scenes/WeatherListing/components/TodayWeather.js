import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Loading from "./Loading";
const TodayWeather = props => {
  const { classes } = props;
  const { loading } = props;
  const { todayWeather } = props;
  let {
    name: cityName = "Cracov",
    clouds: { all: clouds } = { all: 50 },
    wind: { speed: wind } = { speed: 0 },
    main: { temp: temperature, pressure } = { temp: 275, pressure: 0 },
    weather: [{ icon }] = [{ icon: "10d" }],
    dt: date = 0
  } = todayWeather;
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        {loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <CardHeader title={cityName} subheader={timeConverter(date)} />
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
              <CardContent>
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
              <CardContent>
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
            {/* <div className = {classes.actionWrapper}>
              <CardActions>
                <Button size="small">More days</Button>
              </CardActions>
            </div> */}
          </React.Fragment>
        )}
      </Card>
    </div>
  );
};

const styles = theme => ({
  root: {
    fontSize: "20px",
    display: "grid",
    margin: "0",
    width: "90%",
    height: "95%",
    justifySelf: "center",
    alignSelf: "end",
    gridColumnStart: "1",
    gridColumnEnd: "2",
    gridRowStart: "1",
    gridRowEnd: "3",
    [theme.breakpoints.down("sm")]: {
      gridColumnStart: "1",
      gridColumnEnd: "3",
      gridRowStart: "1",
      gridRowEnd: "3",
      marginBottom: "20px"
    }
  },
  card: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px"
    }
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: "20px"
  },
  temperature: {
    paddingTop: "20px",
    fontSize: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  pos: {
    marginBottom: 12
  },
  flexWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionWrapper: {
    positon: "absolute",
    bottom: "5px",
    color: "red"
  },
  icons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3px"
  },
  imgWrapper: {
    paddingTop: "40px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      paddingTop: "100px"
    }
  },
  weatherImg: {
    width: "70%",
    position: "relative",
    top: "20px",
    // maxWidth: '100%',
    // height: 'auto',
    [theme.breakpoints.up("sm")]: {
      width: "40%"
    }
  },
});

TodayWeather.propTypes = {
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

export default withStyles(styles)(TodayWeather);
