import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiClient } from 'configs/axiosInterceptor';
import useCheckAuth from 'modules/customer/components/auth/hooks/useCheckAuth';
import { IUpdateProfileDTO } from 'modules/customer/components/user/dto/update-profile.dto';
import { toast } from 'react-hot-toast';
import { GetUserProfileDTO } from '../dto/get-user.dto';
import { DataUpdateDTO } from '../dto/update-user.dto';

export default function useUpdateProfile() {
  const { signOut } = useCheckAuth();
  return useMutation(async (inputUpdateProfile: IUpdateProfileDTO) => {
    const apiClient = ApiClient(signOut);

    const { day, month, year, ...other } = inputUpdateProfile;

    const dataUpdateProfile: DataUpdateDTO = {
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
      apiClient.put<IAxiosResponse<GetUserProfileDTO>>(
        'users/update-profile',
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
