import axios from 'axios';
import {ApiConst} from './ApiConst';

export const getWebServiceCall = async (endpoint, params) => {

    console.log('-------' + endpoint + '-------');
    console.log('Base URL :>>> ', JSON.stringify(ApiConst.BASE_URL));
    console.log('Params :>>> ', JSON.stringify(params));

    return await axios
        .get(ApiConst.BASE_URL + endpoint, params)
        .then(response => response)
        .catch(error => {
            throw error;
        });
};
