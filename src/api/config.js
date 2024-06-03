import axios from "axios";

const baseURL = "http://localhost:3000/";

export const axiosObj = axios.create({
  baseURL,
});