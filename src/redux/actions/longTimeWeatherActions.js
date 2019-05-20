import {
  LONGTIME_WEATHER_REQUEST,
  LONGTIME_WEATHER_SUCCESS,
  LONGTIME_WEATHER_FAILURE,
  DISPLAY_LONGTIME_WEATHER,
} from "./types";

import { getLongTimeWeather } from "../../scenes/MainPage/services/weatherService";

//LongTimeWeatherRequest

const longTimeWeatherRequest = () => ({
  type: LONGTIME_WEATHER_REQUEST
});
const longTimeWeatherSuccess = payload => ({
  type: LONGTIME_WEATHER_SUCCESS,
  payload
});

const longTimeWeatherFailure = payload => ({
  type: LONGTIME_WEATHER_FAILURE,
  payload
});

export const fetchLongTimeWeather = () => dispatch => {
  dispatch(longTimeWeatherRequest());
  return getLongTimeWeather()
    .then(response => dispatch(longTimeWeatherSuccess(response)))
    .catch(error => dispatch(longTimeWeatherFailure(error)));
};


export const displayLongTimeWeather = () =>({
  type:DISPLAY_LONGTIME_WEATHER,
});