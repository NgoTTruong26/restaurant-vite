import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiAdmin } from 'configs/apiAdmin';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAdmin } from 'redux/features/auth-admin/authAdminSlice';
import { GetAdminDTO } from '../../dto/get-admins.dto';

export default function useGetAdminProfileById(adminId: string) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const accessToken: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN_ADMIN,
  );

  const getProfile = useQuery({
    queryKey: [`get_profile_admin_${adminId}_${accessToken}`],
    queryFn: async () => {
      try {
        const response = await apiAdmin.get<IAxiosResponse<GetAdminDTO>>(
          `/admin/get-admin-by-id/${adminId}`,
        );

        return response.data.data;
      } catch (error) {
        alert('Đăng nhập hết hạn');
        dispatch(setAdmin(null));
        localStorage.removeItem(import.meta.env.VITE_ACCESS_TOKEN_ADMIN);
        navigate('admin/auth/sign-in');
        return null;
      }
    },
    refetchOnMount: 'always',
  });

  return getProfile;
}
