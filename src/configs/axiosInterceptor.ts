import axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { IAxiosResponse } from './api';

export function ApiClient(onUnauthenticated: Function) {
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
    if (
      error.response?.status == 401 &&
      error.config?.url !== '/auth/refresh-token'
    ) {
      return refreshTokenResponseError(error, onUnauthenticated);
    }
    const errMessage = error.response?.data || error?.response || error;
    return Promise.reject(errMessage);
  };

  const refreshTokenResponseError = async (
    error: AxiosError,
    signout: Function,
  ) => {
    const refreshToken = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN);

    if (!refreshToken) {
      signout();
      return;
    }
    try {
      const { data } = await newInstance.post<IAxiosResponse<RefreshTokenDTO>>(
        '/auth/refresh-token',
      );

      if (!data.data) {
        throw new Error('You are not authenticated');
      }

      localStorage.setItem(
        import.meta.env.VITE_ACCESS_TOKEN,
        data.data.accessToken,
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
    signout: Function,
  ) => {
    const refreshToken = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN);

    if (!refreshToken) {
      signout();
      return response;
    }
    try {
      const { data } = await newInstance.post<IAxiosResponse<RefreshTokenDTO>>(
        '/auth/refresh-token',
      );

      if (!data.data) {
        throw new Error('You are not authenticated');
      }

      localStorage.setItem(
        import.meta.env.VITE_ACCESS_TOKEN,
        data.data.accessToken,
      );

      response.config!.headers.Authorization = `Bearer ${data.data.accessToken}`;

      return newInstance(response.config!);
    } catch (error) {
      signout();
      return response;
    }
  };

  newInstance.interceptors.request.use(
    (config) => {
      const token: string | null = localStorage.getItem(
        import.meta.env.VITE_ACCESS_TOKEN,
      );

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (err) => {
      return Promise.reject(err);
    },
  );

  newInstance.interceptors.response.use(onResponseSuccess, onResponseError);
  return newInstance;
}

export function ApiAdmin(onUnauthenticated: Function) {
  const newInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
  });

  const onResponseSuccess = async (response: AxiosResponse) => {
    return response;
  };

  const onResponseError = async (error: AxiosError) => {
    if (
      error.response?.status == 401 &&
      error.config?.url !== '/admin/refresh-token'
    ) {
      return refreshTokenResponseError(error, onUnauthenticated);
    }

    const errMessage = error.response?.data || error?.response || error;
    return Promise.reject(errMessage);
  };

  const refreshTokenResponseError = async (
    error: AxiosError,
    signout: Function,
  ) => {
    const refreshToken = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN_ADMIN);

    if (!refreshToken) {
      signout();
      return;
    }
    try {
      const { data } = await newInstance.post<IAxiosResponse<RefreshTokenDTO>>(
        '/admin/refresh-token',
      );

      if (!data.data) {
        throw new Error('You are not authenticated');
      }

      localStorage.setItem(
        import.meta.env.VITE_ACCESS_TOKEN_ADMIN,
        data.data.accessToken,
      );

      error.config!.headers.admin_authorization = `Bearer ${data.data.accessToken}`;

      return newInstance(error.config!);
    } catch (error) {
      signout();
      return;
    }
  };

  newInstance.interceptors.request.use(
    (config) => {
      const tokenAdmin: string | null = localStorage.getItem(
        import.meta.env.VITE_ACCESS_TOKEN_ADMIN,
      );

      if (tokenAdmin) {
        config.headers.admin_authorization = `Bearer ${tokenAdmin}`;
      }

      return config;
    },
    (err) => {
      return Promise.reject(err);
    },
  );

  newInstance.interceptors.response.use(onResponseSuccess, onResponseError);
  return newInstance;
}
