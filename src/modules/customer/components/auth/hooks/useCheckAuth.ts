import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import { GetPreviewProfileDTO } from 'modules/customer/components/user/components/accountInformation/dto/get-user.dto';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/features/auth/setUserSlice';

export default function useCheckAuth() {
  const dispatch = useDispatch();

  const apiClient = ApiClient(() => {});

  const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

  return useMutation(
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
}
