import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { store } from 'redux/app/store';
import { signOutAdmin } from 'redux/features/auth-admin/authAdminSlice';
import { IAxiosResponse, api } from './api';

export const apiAdmin = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

apiAdmin.interceptors.request.use((config) => {
  const tokenAdmin: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN_ADMIN,
  );

  if (tokenAdmin) {
    config.headers.admin_authorization = `Bearer ${tokenAdmin}`;
  }

  return config;
});

apiAdmin.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const config = error.config;

    if (
      error.response?.status === 401 &&
      config?.url !== '/admin/refresh-token'
    ) {
      const refreshToken = Cookies.get(
        import.meta.env.VITE_REFRESH_TOKEN_ADMIN,
      );
      if (!refreshToken) {
        return Promise.reject(error);
      }
      try {
        const { data } = (
          await apiAdmin.post<IAxiosResponse<RefreshTokenDTO>>(
            '/admin/refresh-token',
          )
        ).data;
        if (data) {
          localStorage.setItem(
            import.meta.env.VITE_ACCESS_TOKEN_ADMIN,
            data.accessToken,
          );
          config!.headers.admin_authorization = `Bearer ${data.accessToken}`;
          return api(config!);
        }
      } catch (error) {
        toast.error('Session expired, please re-login');
        store.dispatch(signOutAdmin());
      }
    }
    return Promise.reject(error);
  },
);
