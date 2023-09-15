import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { IInputDeleteCheckedAdmin } from '../../dto/delete-admin-list.dto';
import { formSchemaDeleteCheckedAdmin } from 'helpers/formSchemaDeleteCheckedAdmin';

export function useDeleteCheckedAdmin() {
  const methods = useForm<IInputDeleteCheckedAdmin>({
    defaultValues: {
      admins: [],
    },
    resolver: yupResolver(formSchemaDeleteCheckedAdmin),
  });

  const deleteCheckedAdmins = useFieldArray({
    control: methods.control,
    name: 'admins',
  });

  return {
    methods,
    deleteCheckedAdmins,
  };
}
