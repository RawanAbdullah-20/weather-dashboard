import axios, { type InternalAxiosRequestConfig } from 'axios';

const setAxiosConfig = (config: InternalAxiosRequestConfig) => {
    /*
    add the weather api key to the request as query parameter
    */
   config = config ?? {};
   config.params = {
     ...config.params,
     key: import.meta.env.VITE_WEATHER_API_KEY
   };
   
   return config;
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_API_BASE_URL,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => setAxiosConfig(config)
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  async (response) => response,
  async (error) => console.log("error interceptor", error)
);

export default axiosInstance;