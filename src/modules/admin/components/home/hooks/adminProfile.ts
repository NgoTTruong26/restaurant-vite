import { useMutation, useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiAdmin } from 'configs/axiosInterceptor';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAdmin } from 'redux/features/auth-admin/setAdminSlice';
import { GetAdminDTO } from '../../adminList/dto/get-admins.dto';
import { ChangePasswordDTO } from '../dto/admin-profile.dto';

function useGetAdminProfile() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const apiAdmin = ApiAdmin(() => {});

  const accessToken: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN_ADMIN,
  );

  const getProfile = useQuery({
    queryKey: [`get_profile_admin_${accessToken}`],
    queryFn: async () => {
      try {
        const response =
          await apiAdmin.get<IAxiosResponse<GetAdminDTO>>('admin/auth/profile');

        return response.data.data;
      } catch (error) {
        alert('Đăng nhập hết hạn');
        dispatch(setAdmin(null));
        localStorage.removeItem(import.meta.env.VITE_ACCESS_TOKEN_ADMIN);
        navigate('/admin/auth/sign-in');
        return null;
      }
    },

    refetchOnMount: 'always',
  });

  return getProfile;
}

function useChangePasswordAdmin() {
  return useMutation(async (inputChangePassword: ChangePasswordDTO) => {
    const apiAdmin = ApiAdmin(() => {});

    const data = await toast.promise(
      apiAdmin.put<IAxiosResponse<null>>(
        'admin/auth/change-password',
        inputChangePassword,
      ),
      {
        loading: 'Loading',
        success: 'Change Password Success',
        error: 'Change Password failed',
      },
      {
        position: 'top-right',
      },
    );

    return data.data;
  });
}

export { useGetAdminProfile, useChangePasswordAdmin };
