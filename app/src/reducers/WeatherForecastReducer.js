import {GET_WEATHER_DATA, WEATHER_DATA_ERROR} from '../actions/ActionTypes';

const initialState = {
    weatherData: {},
    loading: true,
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

        default:
            return state;
    }
}
