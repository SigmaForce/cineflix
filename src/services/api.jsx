import axios from "axios";
import { getUserLocalStorage } from "../contexts/AuthProvider/utils";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  //https://api.themoviedb.org/3/movie/popular?api_key=a496bfbc28caa07fc10a04209abf9614&language=pt-BR&page=1
});

export const userApi = axios.create({
  baseURL: "https://reqres.in/api/",
});

userApi.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();
    config.headers.Authorization = user?.token;
    return config;
  },
  (error) => {}
);
