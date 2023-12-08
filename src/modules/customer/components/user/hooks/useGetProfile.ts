import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/features/auth/setUserSlice';
import useCheckAuth from '../../auth/hooks/useCheckAuth';
import { IUser } from '../interfaces/user.interface';

export default function useGetProfile() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { signOut } = useCheckAuth();

  const apiClient = ApiClient(signOut);

  const getProfile = useQuery({
    queryKey: [`get_profile`],
    queryFn: async () => {
      try {
        const response =
          await apiClient.get<IAxiosResponse<Omit<IUser, 'accessToken'>>>(
            '/auth/profile',
          );

        return response.data.data;
      } catch (error) {
        alert('Đăng nhập hết hạn');
        console.log(error);
        dispatch(setUser(null));
        localStorage.removeItem('access_token');
        navigate('/');
        return null;
      }
    },
  });

  return getProfile;
}
