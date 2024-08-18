import axios from "axios";

export const baseURL = "http://79.143.85.230:3000/";

export const axiosObj = axios.create({
  baseURL,
});
