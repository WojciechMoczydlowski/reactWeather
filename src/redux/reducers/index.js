import { combineReducers } from 'redux';
import todayWeatherReducer from './todayWeatherReducer';
import longTimeWeatherReducer from './longTimeWeatherReducer';
import searchWeatherReducer from './searchWeatherReducer';

export default combineReducers({
    todayWeather : todayWeatherReducer,
    longTimeWeather: longTimeWeatherReducer,
    searchWeather: searchWeatherReducer,
});