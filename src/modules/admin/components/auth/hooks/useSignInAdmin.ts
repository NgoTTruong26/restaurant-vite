import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { toast } from 'react-hot-toast';
import { IProfileAdminDTO } from '../dto/get-profile-admin.dto';
import { SignInDTO } from '../dto/sign-in.dto';

export default function useSignInAdmin() {
  return useMutation(async (inputSign: SignInDTO) => {
    const data = await toast.promise(
      api.post<IAxiosResponse<IProfileAdminDTO>>(
        '/admin/auth/sign-in',
        inputSign,
      ),
      {
        loading: 'Loading',
        success: 'SignIn Success',
        error: 'SignIn failed',
      },
    );

    return data.data.data;
  });
}
