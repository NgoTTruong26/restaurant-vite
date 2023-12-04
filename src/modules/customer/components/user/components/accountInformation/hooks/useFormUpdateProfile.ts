import { yupResolver } from '@hookform/resolvers/yup';
import { formSchemaUpdateProfile } from 'helpers/formSchemaUpdateProfile';
import { IUpdateProfileDTO } from 'modules/customer/components/user/dto/update-profile.dto';
import { useForm } from 'react-hook-form';

interface DefaultValues {
  day?: string | null;
  month?: string | null;
  year?: string | null;
}

export function useFormUpdateProfile(props: DefaultValues) {
  const methods = useForm<IUpdateProfileDTO>({
    defaultValues: { ...props },
    resolver: yupResolver(formSchemaUpdateProfile),
  });

  return {
    methods,
  };
}
