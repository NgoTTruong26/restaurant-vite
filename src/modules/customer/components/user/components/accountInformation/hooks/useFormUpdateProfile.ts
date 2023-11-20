import { yupResolver } from '@hookform/resolvers/yup';
import { formSchemaUpdateProfile } from 'helpers/formSchemaUpdateProfile';
import { IUpdateProfileDTO } from 'modules/customer/components/user/dto/update-profile.dto';
import { useForm } from 'react-hook-form';

export function useFormUpdateProfile() {
  const { formState, ...methods } = useForm<IUpdateProfileDTO>({
    defaultValues: { gender: '' },
    resolver: yupResolver(formSchemaUpdateProfile),
  });

  return {
    formState,
    methods,
  };
}
