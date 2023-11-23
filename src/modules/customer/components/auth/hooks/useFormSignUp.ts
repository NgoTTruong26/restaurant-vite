import { yupResolver } from '@hookform/resolvers/yup';
import { formSchemaSignUp } from 'helpers/formSchemaSignUp';

import { useForm } from 'react-hook-form';

interface InputSignUp {
  fullName: string;
  username: string;
  password: string;
  repeat_password: string;
}

export function useFormSignUp() {
  const methods = useForm<InputSignUp>({
    defaultValues: {
      fullName: '',
      username: '',
      password: '',
      repeat_password: '',
    },
    resolver: yupResolver(formSchemaSignUp),
  });

  const onSubmit = methods.handleSubmit((data: InputSignUp) => {
    console.log(data);
  });

  return {
    methods,
    onSubmit,
  };
}
