import axios, { AxiosRequestConfig } from "axios";

const SERVER_URL = "http://localhost:3000";

const config: AxiosRequestConfig = {
  baseURL: SERVER_URL,
};

const GlobalAxios = axios.create(config);
export default GlobalAxios;
