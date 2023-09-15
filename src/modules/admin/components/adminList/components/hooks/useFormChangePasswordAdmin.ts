import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaChangePasswordAdmin } from "helpers/formSchemaChangePassword";
import { useForm } from "react-hook-form";

export interface InputChangePasswordAdmin {
  new_password: string;
  repeat_new_password: string;
}

export function useFormChangePasswordAdmin() {
  const { formState, ...methods } = useForm<InputChangePasswordAdmin>({
    defaultValues: {
      new_password: "",
      repeat_new_password: "",
    },
    resolver: yupResolver(formSchemaChangePasswordAdmin),
  });

  return {
    formState,
    methods,
  };
}
