import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiAdmin } from 'configs/apiAdmin';
import { IUpdateProfileDTO } from 'modules/customer/components/user/dto/update-profile.dto';
import { toast } from 'react-hot-toast';
import { GetAdminDTO } from '../../adminList/dto/get-admins.dto';
import { DataUpdateAdminDTO } from '../../adminList/dto/update-admin-profile.dto';

export default function useUpdateProfileAdmin() {
  return useMutation(async (inputUpdateProfile: IUpdateProfileDTO) => {
    const { day, month, year, ...other } = inputUpdateProfile;

    const dataUpdateProfile: DataUpdateAdminDTO = {
      ...other,
    };

    if (
      month &&
      day &&
      year &&
      !isNaN(
        new Date(`${month}/${parseInt(day || '') + 1}/${year}`).getFullYear(),
      )
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
    );

    return data.data;
  });
}
