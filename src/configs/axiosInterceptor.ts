import { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { ECookies } from "./cookies";
import { IAxiosResponse, api } from "./api";

export default function AxiosInterceptorResponse(onUnauthenticated: Function) {
  const onResponseSuccess = async (response: AxiosResponse) => {
    return response;
  };

  const onResponseError = async (error: AxiosError) => {
    if (error.response?.status !== 401) {
      const errMessage = error.response?.data || error?.response || error;
      return Promise.reject(errMessage);
    }

    return refreshToken(error, onUnauthenticated);
  };

  const refreshToken = async (error: AxiosError, signout: Function) => {
    const refreshToken = Cookies.get(ECookies.REFRESH_Token);
    console.log(refreshToken);

    if (!refreshToken) {
      signout();
      return;
    }
    try {
      const { data } = await api.post<IAxiosResponse<RefreshTokenDTO>>(
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

      return api(error.config!);
    } catch (error) {
      signout();
      return;
    }
  };

  api.interceptors.response.use(onResponseSuccess, onResponseError);
  return api;
}
