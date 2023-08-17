import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { ECookies } from "./cookies";
import { IAxiosResponse } from "./api";

export default function AxiosInterceptorResponse(onUnauthenticated: Function) {
  const newInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
  });

  const onResponseSuccess = async (response: AxiosResponse) => {
    if (response.data.status === 401) {
      return refreshTokenResponseSuccess(response, onUnauthenticated);
    }

    return response;
  };

  const onResponseError = async (error: AxiosError) => {
    if (error.response?.status !== 401) {
      const errMessage = error.response?.data || error?.response || error;
      return Promise.reject(errMessage);
    }

    return refreshTokenResponseError(error, onUnauthenticated);
  };

  const refreshTokenResponseError = async (
    error: AxiosError,
    signout: Function
  ) => {
    const refreshToken = Cookies.get(ECookies.REFRESH_Token);

    if (!refreshToken) {
      signout();
      return;
    }
    try {
      const { data } = await newInstance.post<IAxiosResponse<RefreshTokenDTO>>(
        "/auth/refresh-token"
      );

      if (!data.data) {
        throw new Error("You are not authenticated");
      }

      localStorage.setItem(
        import.meta.env.VITE_ACCESS_TOKEN,
        data.data.accessToken
      );

      error.config!.headers.Authorization = `Bearer ${data.data.accessToken}`;

      return newInstance(error.config!);
    } catch (error) {
      signout();
      return;
    }
  };

  const refreshTokenResponseSuccess = async (
    response: AxiosResponse,
    signout: Function
  ) => {
    const refreshToken = Cookies.get(ECookies.REFRESH_Token);

    if (!refreshToken) {
      signout();
      return response;
    }
    try {
      const { data } = await newInstance.post<IAxiosResponse<RefreshTokenDTO>>(
        "/auth/refresh-token"
      );

      if (!data.data) {
        throw new Error("You are not authenticated");
      }

      localStorage.setItem(
        import.meta.env.VITE_ACCESS_TOKEN,
        data.data.accessToken
      );

      response.config!.headers.Authorization = `Bearer ${data.data.accessToken}`;

      return newInstance(response.config!);
    } catch (error) {
      signout();
      return response;
    }
  };

  newInstance.interceptors.response.use(onResponseSuccess, onResponseError);
  return newInstance;
}
