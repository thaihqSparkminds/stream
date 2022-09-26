import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpResponse } from 'models/http';

const axiosClient = axios.create({
  baseURL: process.env.BASE_GATEWAY_URL || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const handleRequest = (promise: Promise<any>) => {
  return promise
    .then((res: any) => res as HttpResponse<any>)
    .catch((err: any) => err as HttpResponse<any>);
};

export default axiosClient;
