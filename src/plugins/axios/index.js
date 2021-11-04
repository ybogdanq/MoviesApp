import axios from "axios";
import interceptors from "./interceptors";
// process.env.VUE_APP_API_URL
// process.env.VUE_APP_API_KEY

const instance = axios.create({
  // baseURL: "http://www.omdbapi.com",
  baseURL: process.env.VUE_APP_API_URL,
});

interceptors(instance);

export default instance;
