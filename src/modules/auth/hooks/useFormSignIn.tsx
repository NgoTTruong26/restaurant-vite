import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchemaSignIn } from "helpers/formSchemaSignIn";

interface InputSignIn {
  username: string;
  password: string;
  remember_account: boolean;
}

export function useFormSignIn() {
  const { formState, ...methods } = useForm<InputSignIn>({
    defaultValues: { username: "", password: "", remember_account: false },
    resolver: yupResolver(formSchemaSignIn),
  });

  const onSubmit = (data: InputSignIn) => {
    console.log(data);
  };

  return {
    methods,
    formState,
    onSubmit,
  };
}
