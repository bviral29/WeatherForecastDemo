import {combineReducers} from 'redux';
import WeatherForecastReducer from './WeatherForecastReducer';

export default combineReducers({
    WeatherForecastReducer: WeatherForecastReducer,
});
