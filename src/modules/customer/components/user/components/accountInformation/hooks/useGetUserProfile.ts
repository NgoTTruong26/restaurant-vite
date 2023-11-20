import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'redux/features/auth/setUserSlice';
import { GetUserProfileDTO } from '../dto/get-user.dto';

export default function useGetUserProfile() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const apiClient = ApiClient(() => {});

  const accessToken: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN,
  );

  const getProfile = useQuery({
    queryKey: [`get_profile_user_${accessToken}`],
    queryFn: async () => {
      try {
        const response =
          await apiClient.get<IAxiosResponse<GetUserProfileDTO>>(
            '/auth/profile',
          );

        return response.data.data;
      } catch (error) {
        alert('Đăng nhập hết hạn');
        dispatch(setUser(null));
        localStorage.removeItem(import.meta.env.VITE_ACCESS_TOKEN);
        navigate('/auth/sign-in');
        return null;
      }
    },

    refetchOnMount: 'always',
  });

  return getProfile;
}
