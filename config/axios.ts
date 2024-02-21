// axiosConfig.ts

import axios, { AxiosRequestConfig } from 'axios';


// Define your default configuration here
const config: AxiosRequestConfig = {
  baseURL: 'https://api-dp.ibnmarkit.com/api/v1/users',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjMwNzk0OWNiLWZmODItNGVkOS1hNzZhLWMxOGRmOThiZDZkYyIsImlhdCI6MTcwNDU0OTU4MH0.sMR6ZZ52KNkiXG8V-Y6JxjkscCOOEDY7DPEFc5nMU88',
    'Content-Type': 'application/json',
    // Add any other default headers you need
  },
  // You can add other default settings here
};

// Create an instance of Axios with the default config
const axiosInstance = axios.create(config);

// Optionally, you can add interceptors for request and response
axiosInstance.interceptors.request.use(
  (config) => {
    // Perform actions before the request is sent, like adding authorization tokens
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// Export the Axios instance so you can use it in other parts of your application
export default axiosInstance;
