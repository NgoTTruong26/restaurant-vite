import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { formSchemaUpdateAdminProfile } from 'helpers/formSchemaUpdateAdminProfile';
import { IUpdateAdminProfileDTO } from '../../dto/update-admin-profile.dto';

export function useFormUpdateAdminProfile() {
  const { formState, ...methods } = useForm<IUpdateAdminProfileDTO>({
    defaultValues: {
      gender: '',
    },
    resolver: yupResolver(formSchemaUpdateAdminProfile),
  });

  return {
    formState,
    methods,
  };
}
