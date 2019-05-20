import {
    WEATHER_INPUT_CHANGE
  } from "../actions/types";
  
  const cityName = {
    cityName: 'Warsaw'
  };
  
  const searchWeatherReducer = (state = cityName, action) => {
    switch (action.type) {
      case WEATHER_INPUT_CHANGE:
        return {
          ...state,
          cityName: action.payload
        };
      default:
        return state;
    }
  };
  export default searchWeatherReducer;
  