import axios, { AxiosError, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { store } from 'redux/app/store';
import { signOut } from 'redux/features/auth/authSlice';
import { IAxiosResponse } from './api';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  const token: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN,
  );

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response.data.status === 401) {
      const refreshToken = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN);

      if (refreshToken) {
        try {
          const { data } = (
            await apiClient.post<IAxiosResponse<RefreshTokenDTO>>(
              '/auth/refresh-token',
            )
          ).data;

          if (data) {
            localStorage.setItem(
              import.meta.env.VITE_ACCESS_TOKEN,
              data.accessToken,
            );

            response.config!.headers.Authorization = `Bearer ${data.accessToken}`;

            return apiClient(response.config!);
          }
        } catch (error) {
          store.dispatch(signOut());
        }
      }
    }

    return response;
  },
  async (error: AxiosError) => {
    const config = error.config;
    console.log(123);

    if (
      error.response?.status === 401 &&
      config?.url !== '/auth/refresh-token'
    ) {
      const refreshToken = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN);

      if (!refreshToken) {
        return Promise.reject(error);
      }
      try {
        const { data } = (
          await apiClient.post<IAxiosResponse<RefreshTokenDTO>>(
            '/auth/refresh-token',
          )
        ).data;

        if (data) {
          localStorage.setItem(
            import.meta.env.VITE_ACCESS_TOKEN,
            data.accessToken,
          );

          config!.headers.Authorization = `Bearer ${data.accessToken}`;

          return apiClient(config!);
        }
      } catch (error) {
        toast.error('Session expired, please re-login');
        signOut();
      }
    }
    return Promise.reject(error);
  },
);

/* export function ApiClient(onUnauthenticated: Function) {
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
    signOut: Function,
  ) => {
    const refreshToken = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN);

    if (!refreshToken) {
      signOut();
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
      signOut();
      return;
    }
  };

  const refreshTokenResponseSuccess = async (
    response: AxiosResponse,
    signOut: Function,
  ) => {
    const refreshToken = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN);

    if (!refreshToken) {
      signOut();
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
      signOut();
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
} */

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
    signOut: Function,
  ) => {
    const refreshToken = Cookies.get(import.meta.env.VITE_REFRESH_TOKEN_ADMIN);

    if (!refreshToken) {
      signOut();
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
      signOut();
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
