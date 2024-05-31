import axios from "axios";

const baseURL = "localhost:3000/";

export const axiosObj = axios.create({
  baseURL,
});