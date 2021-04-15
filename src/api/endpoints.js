import axiosInstance from "./axiosInstantce";
import { HTTP_METHODS } from '../constants/common';


export const moviesInfo = async () => {
    return axiosInstance({
        method: HTTP_METHODS.GET,
        url: 'FirstPage',
       
    });
};