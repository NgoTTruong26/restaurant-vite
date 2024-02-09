import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { IProfileAdminDTO } from '../dto/get-profile-admin.dto';
import { SignInDTO } from '../dto/sign-in.dto';

export default function useSignInAdmin() {
  return useMutation(async (inputSign: SignInDTO) => {
    const data = await api.post<IAxiosResponse<IProfileAdminDTO>>(
      '/admin/auth/sign-in',
      inputSign,
    );
    return data.data.data;
  });
}
