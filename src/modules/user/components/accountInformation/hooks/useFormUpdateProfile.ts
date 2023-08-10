import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaUpdateProfile } from "helpers/formSchemaUpdateProfile";
import { useForm } from "react-hook-form";

export interface InputUpdateProfile {
  lastname: string;
  firstname: string;
  day: string;
  month: string;
  year: string;
  gender: string;
  nationality: string;
}

export function useFormUpdateProfile() {
  const { formState, ...methods } = useForm<InputUpdateProfile>({
    resolver: yupResolver(formSchemaUpdateProfile),
  });

  return {
    formState,
    methods,
  };
}
