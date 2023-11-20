import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import { formSchemaModifyAdminRole } from 'helpers/formSchemaModifyAdminRole';
import { IInputModifyAdminRole } from '../../dto/modify-role-admin.dto';

export function useFormModifyAdminRole() {
  const methods = useForm<IInputModifyAdminRole>({
    defaultValues: {
      modifyAdminRole: [],
    },
    resolver: yupResolver(formSchemaModifyAdminRole),
  });

  const modifyAdminRole = useFieldArray({
    control: methods.control,
    name: 'modifyAdminRole',
  });

  return {
    methods,
    modifyAdminRole,
  };
}
