import { yupResolver } from '@hookform/resolvers/yup';
import { formSchemaChangePasswordAdminById } from 'helpers/formSchemaChangePassword';
import { useForm } from 'react-hook-form';

export interface InputChangePasswordAdminById {
  new_password: string;
  repeat_new_password: string;
}

export function useFormChangePasswordAdminById() {
  const { formState, ...methods } = useForm<InputChangePasswordAdminById>({
    defaultValues: {
      new_password: '',
      repeat_new_password: '',
    },
    resolver: yupResolver(formSchemaChangePasswordAdminById),
  });

  return {
    formState,
    methods,
  };
}
