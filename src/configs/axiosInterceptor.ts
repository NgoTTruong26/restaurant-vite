import { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";
import { ECookies } from "./cookies";
import { api } from "./api";
import useRefreshToken from "hooks/useRefreshToken";

export default function AxiosInterceptorResponse(onUnauthenticated: Function) {
  const { mutate, data } = useRefreshToken();
  console.log(123);

  const onResponseSuccess = async (response: AxiosResponse) => {
    return response;
  };

  const onResponseError = async (error: AxiosError) => {
    console.log(error.config?.url);

    if (error.response?.status !== 401) {
      const errMessage = error.response?.data || error?.response || error;
      return Promise.reject(errMessage);
    }

    return refreshToken(error, onUnauthenticated);
  };

  const refreshToken = (error: AxiosError, signout: Function) => {
    const refreshToken = Cookies.get(ECookies.REFRESH_Token);
    console.log(123);

    if (!refreshToken) {
      signout();
      return;
    }
    try {
      mutate(undefined, {
        onSuccess(data) {
          console.log(data);
        },
      });
    } catch (error) {
      signout();
      return;
    }
  };

  api.interceptors.response.use(onResponseSuccess, onResponseError);
  return api;
}
