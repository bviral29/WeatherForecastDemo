import {GET_WEATHER_DATA, WEATHER_DATA_ERROR} from './ActionTypes';
import {getWebServiceCall} from '../api/Webservice';
import {ApiConst} from '../api/ApiConst';

export const callWeatherDataAPI = (cityName) => async dispatch => {
    try {
        var bodyParams = {params: {appid: ApiConst.API_KEY, q: cityName}};

        const res = await getWebServiceCall(ApiConst.DATA_WEATHER, bodyParams);
        console.log('GET WEATHER DATA SUCCESS :>>> ', res.data);
        dispatch({
            type: GET_WEATHER_DATA,
            payload: res.data,
        });
    } catch (error) {
        console.log('GET WEATHER DATA ERROR :>>> ', error);
        dispatch({
            type: WEATHER_DATA_ERROR,
            payload: error,
        });
    }
};

export const getWeatherData = () => {
    return GET_WEATHER_DATA;
};
