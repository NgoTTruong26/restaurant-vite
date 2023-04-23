import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaSignUp } from "helpers/formSchemaSignUp";

import { useForm } from "react-hook-form";

interface InputSignUp {
  first_name: string;
  last_name: string;
  username: string;
  password: string;
  repeat_password: string;
  agree_terms_priacvy: boolean;
}

export function useFormSignUp() {
  const { formState, ...methods } = useForm<InputSignUp>({
    defaultValues: {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      repeat_password: "",
    },
    resolver: yupResolver(formSchemaSignUp),
  });

  const onSubmit = (data: InputSignUp) => {
    console.log(data);
  };

  return {
    methods,
    formState,
    onSubmit,
  };
}
