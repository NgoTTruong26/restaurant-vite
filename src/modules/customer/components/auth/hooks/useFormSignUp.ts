import { yupResolver } from '@hookform/resolvers/yup';
import { formSchemaSignUp } from 'helpers/formSchemaSignUp';

import { useForm } from 'react-hook-form';

interface InputSignUp {
  fullName: string;
  username: string;
  password: string;
  repeat_password: string;
  agree_terms_priacvy: boolean;
}

export function useFormSignUp() {
  const { formState, ...methods } = useForm<InputSignUp>({
    defaultValues: {
      fullName: '',
      username: '',
      password: '',
      repeat_password: '',
    },
    resolver: yupResolver(formSchemaSignUp),
  });

  const onSubmit = (data: InputSignUp) => {};

  return {
    methods,
    formState,
    onSubmit,
  };
}
