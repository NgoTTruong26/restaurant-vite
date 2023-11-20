import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { IUser } from 'modules/customer/components/user/interfaces/user.interface';
import { toast } from 'react-hot-toast';
import { SignInDTO } from '../dto/sign-in.dto';

export default function useSignIn() {
  return useMutation(async (inputSign: SignInDTO) => {
    const data = await toast.promise(
      api.post<IAxiosResponse<IUser>>(
        import.meta.env.VITE_API_SIGN_IN,
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
