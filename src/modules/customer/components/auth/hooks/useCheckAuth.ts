import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiClient } from 'configs/axiosInterceptor';
import { GetUserProfileDTO } from 'modules/customer/components/user/components/accountInformation/dto/get-user.dto';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/features/auth/authSlice';

export default function useCheckAuth() {
  const dispatch = useDispatch();

  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

  const checkAuth = useMutation(
    () =>
      apiClient.post<IAxiosResponse<GetUserProfileDTO>>(
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

      /* onError: () => {
        localStorage.removeItem(accessToken);
        dispatch(setUser(null));
      }, */
      retry: 1,
    },
  );

  return {
    checkAuth,
  };
}
