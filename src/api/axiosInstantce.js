import axios from 'axios';
import { BASE_URL } from '../constants/common';
import { API_CALL_TIME_OUT } from '../constants/common';

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: API_CALL_TIME_OUT,
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log(error)
    }
);

export default instance; 