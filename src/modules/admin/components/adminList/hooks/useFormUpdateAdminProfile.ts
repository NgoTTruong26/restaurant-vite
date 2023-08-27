import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IUpdateAdminProfileDTO } from "../dto/update-admin-profile.dto";
import { formSchemaUpdateAdminProfile } from "helpers/formSchemaUpdateAdminProfile";

export function useFormUpdateAdminProfile() {
  const { formState, ...methods } = useForm<IUpdateAdminProfileDTO>({
    resolver: yupResolver(formSchemaUpdateAdminProfile),
  });

  return {
    formState,
    methods,
  };
}
