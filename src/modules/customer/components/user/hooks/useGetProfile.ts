import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/features/auth/setUserSlice';
import { IUser } from '../interfaces/user.interface';

export default function useGetProfile() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const apiClient = ApiClient(() => {});

  const token: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN,
  );

  const getProfile = useQuery({
    queryKey: [`get_profile_${token}`],
    queryFn: async () => {
      try {
        const response = await apiClient.get<
          IAxiosResponse<Omit<IUser, 'accessToken'>>
        >('/auth/profile', {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        });

        return response.data.data;
      } catch (error) {
        alert('Đăng nhập hết hạn');
        console.log(error);
        dispatch(setUser(null));
        localStorage.removeItem('access_token');
        navigate('/auth/sign-in');
        return null;
      }
    },
  });

  return getProfile;
}
