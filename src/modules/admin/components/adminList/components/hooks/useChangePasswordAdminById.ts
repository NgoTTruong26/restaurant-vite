import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';

import { apiAdmin } from 'configs/apiAdmin';
import { toast } from 'react-hot-toast';
import { GetAdminDTO } from '../../dto/get-admins.dto';
import { ChangePasswordByIdDTO } from '../../dto/update-admin-profile.dto';

export default function useChangePasswordAdminById() {
  return useMutation(async (inputChangePassword: ChangePasswordByIdDTO) => {
    const data = await toast.promise(
      apiAdmin.put<IAxiosResponse<GetAdminDTO>>(
        'admin/change-password',
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
