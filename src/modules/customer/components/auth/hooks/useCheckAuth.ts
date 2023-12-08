import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import Cookies from 'js-cookie';
import { GetPreviewProfileDTO } from 'modules/customer/components/user/components/accountInformation/dto/get-user.dto';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/features/auth/setUserSlice';

export default function useCheckAuth() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem(import.meta.env.VITE_ACCESS_TOKEN);
    Cookies.remove(import.meta.env.VITE_REFRESH_TOKEN);
    dispatch(setUser(null));
    navigate('/');
    return;
  };

  const apiClient = ApiClient(signOut);

  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

  const checkAuth = useMutation(
    () =>
      apiClient.post<IAxiosResponse<GetPreviewProfileDTO>>(
        import.meta.env.VITE_API_CHECK_AUTH,
      ),
    {
      onSuccess: (res) => {
        if (res?.data.data) {
          return dispatch(setUser(res.data.data));
        }

        localStorage.removeItem(accessToken);
        dispatch(setUser(null));
      },

      onError: () => {
        localStorage.removeItem(accessToken);
        dispatch(setUser(null));
      },
      retry: 1,
    },
  );

  return {
    checkAuth,
    signOut,
  };
}
