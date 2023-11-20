import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import { toast } from 'react-hot-toast';
import { GetUserProfileDTO } from '../dto/get-user.dto';
import { ChangePasswordDTO } from '../dto/update-user.dto';

export default function useChangePassword() {
  return useMutation(async (inputChangePassword: ChangePasswordDTO) => {
    const apiClient = ApiClient(() => {});

    const data = await toast.promise(
      apiClient.put<IAxiosResponse<GetUserProfileDTO>>(
        'users/change-password',
        inputChangePassword,
      ),
      {
        loading: 'Loading',
        success: 'Change Password Success',
        error: 'Change Password failed',
      },
    );

    return data.data;
  });
}
