import { yupResolver } from '@hookform/resolvers/yup';
import { formSchemaSignIn } from 'helpers/formSchemaSignIn';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAdmin } from 'redux/features/auth-admin/setAdminSlice';
import { setUser } from 'redux/features/auth/setUserSlice';
import useSignIn from '../services/useSignInAdmin.service';

interface InputSignIn {
  username: string;
  reqPassword: string;
  remember_account: boolean;
}

export function useFormSignInAdmin() {
  console.log('signInAdmin');

  const { formState, ...methods } = useForm<InputSignIn>({
    defaultValues: { username: '', reqPassword: '', remember_account: false },
    resolver: yupResolver(formSchemaSignIn),
  });

  const { mutate, isLoading } = useSignIn();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (inputSign: InputSignIn) => {
    mutate(inputSign, {
      onSuccess(data) {
        const { accessToken, ...dataAdmin } = data!;

        localStorage.setItem(
          import.meta.env.VITE_ACCESS_TOKEN_ADMIN,
          data!.accessToken,
        );

        dispatch(setAdmin(dataAdmin));
        navigate('/admin', { replace: true });
      },
      onError() {
        dispatch(setUser(null));
      },
    });
  };

  return {
    methods,
    formState,
    onSubmit,
    isLoading,
  };
}
