import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { IUser } from 'modules/customer/components/user/interfaces/user.interface';
import { SignInDTO } from '../dto/sign-in.dto';

export default function useSignIn() {
  return useMutation(async (inputSign: SignInDTO) => {
    const data = await api.post<IAxiosResponse<IUser>>(
      import.meta.env.VITE_API_SIGN_IN,
      inputSign,
    );

    return data.data.data;
  });
}
