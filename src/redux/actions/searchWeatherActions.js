import {
    WEATHER_INPUT_CHANGE
  } from "./types";


  export const weatherInputChange = (cityName) =>{
    return{
        type:WEATHER_INPUT_CHANGE,
        payload:cityName,
    }
  };
  