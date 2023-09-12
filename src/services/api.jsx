import axios from "axios";
import { getUserLocalStorage } from "../contexts/AuthProvider/utils";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const userApi = axios.create({
  baseURL: "https://reqres.in/api/",
});


api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${process.env.REACT_APP_API_TOKEN}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

userApi.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();
    config.headers.Authorization = user?.token;
    return config;
  },
  (error) => {}
);
