import {CURRENT_CITY_NAME, GET_WEATHER_DATA, WEATHER_DATA_ERROR} from '../actions/ActionTypes';

const initialState = {
    weatherData: {},
    loading: true,
    currentCityName: '',
};

export default function (state = initialState, action) {

    switch (action.type) {

        case GET_WEATHER_DATA:
            return {
                ...state,
                weatherData: action.payload,
                loading: false,
            };

        case WEATHER_DATA_ERROR:
            return {
                loading: false,
                error: action.payload,
            };

        case CURRENT_CITY_NAME:
            return {
                currentCityName: action.payload,
            };

        default:
            return state;
    }
}
