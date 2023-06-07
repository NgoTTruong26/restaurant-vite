import axios from "axios";

export interface IAxiosResponse<T> {
  status: number;
  message: string;
  data?: T;
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});
