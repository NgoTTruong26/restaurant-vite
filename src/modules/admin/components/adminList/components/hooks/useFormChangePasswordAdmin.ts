import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaChangePassword } from "helpers/formSchemaChangePassword";
import { useForm } from "react-hook-form";

export interface InputChangePasswordAdmin {
  old_password: string;
  new_password: string;
  repeat_new_password: string;
}

export function useFormChangePasswordAdmin() {
  const { formState, ...methods } = useForm<InputChangePasswordAdmin>({
    defaultValues: {
      old_password: "",
      new_password: "",
      repeat_new_password: "",
    },
    resolver: yupResolver(formSchemaChangePassword),
  });

  return {
    formState,
    methods,
  };
}
