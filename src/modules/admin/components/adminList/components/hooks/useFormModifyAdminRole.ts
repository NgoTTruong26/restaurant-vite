import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import { formSchemaModifyAdminRole } from "helpers/formSchemaModifyAdminRole";
import { IModifyAdminRoleDTO } from "../../dto/modify-role-admin.dto";

export function useFormModifyAdminRole() {
  const methods = useForm<IModifyAdminRoleDTO>({
    resolver: yupResolver(formSchemaModifyAdminRole),
  });

  const modifyAdminRole = useFieldArray({
    control: methods.control,
    name: "modifyAdminRole",
  });

  return {
    methods,
    modifyAdminRole,
  };
}
