import {
  LONGTIME_WEATHER_REQUEST,
  LONGTIME_WEATHER_SUCCESS,
  LONGTIME_WEATHER_FAILURE,
  DISPLAY_LONGTIME_WEATHER
} from "../actions/types";

const longTimeWeather = {
  weather: {},
  loading: true,
  error: {},
  display: false
};

const longTimeWeatherReducer = (state = longTimeWeather, action) => {
  switch (action.type) {
    case LONGTIME_WEATHER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LONGTIME_WEATHER_SUCCESS:
      const weather = action.payload;
      return {
        ...state,
        weather,
        loading: false
      };
    case LONGTIME_WEATHER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DISPLAY_LONGTIME_WEATHER:
      const changeDisplay = !state.display;
      return {
        display: changeDisplay,
        ...state
      };
    default:
      return state;
  }
};
export default longTimeWeatherReducer;
