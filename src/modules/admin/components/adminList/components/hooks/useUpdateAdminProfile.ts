import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiAdmin } from 'configs/axiosInterceptor';
import useCheckAuthAdmin from 'modules/admin/components/auth/hooks/useCheckAuthAdmin';
import { toast } from 'react-hot-toast';
import { GetAdminDTO } from '../../dto/get-admins.dto';
import {
  DataUpdateAdminDTO,
  IUpdateAdminProfileDTO,
} from '../../dto/update-admin-profile.dto';

export default function useUpdateAdminProfile() {
  const { signOut } = useCheckAuthAdmin();
  const apiAdmin = ApiAdmin(signOut);

  return useMutation(async (inputUpdateProfile: IUpdateAdminProfileDTO) => {
    const { day, month, year, ...other } = inputUpdateProfile;

    const dataUpdateProfile: DataUpdateAdminDTO = {
      ...other,
    };

    if (
      !isNaN(new Date(`${month}/${parseInt(day) + 1}/${year}`).getFullYear())
    ) {
      dataUpdateProfile.dateBirth = new Date(
        `${month}/${parseInt(day) + 1}/${year}`,
      );
    }
    const data = await toast.promise(
      apiAdmin.put<IAxiosResponse<GetAdminDTO>>(
        'admin/update-profile',
        dataUpdateProfile,
      ),
      {
        loading: 'Loading',
        success: 'Update Profile Success',
        error: 'Update Profile failed',
      },
      {
        position: 'top-right',
      },
    );

    return data.data;
  });
}
