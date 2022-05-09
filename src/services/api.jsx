import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  //https://api.themoviedb.org/3/movie/popular?api_key=a496bfbc28caa07fc10a04209abf9614&language=pt-BR&page=1
});

export default api;
