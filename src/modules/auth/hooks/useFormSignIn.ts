import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchemaSignIn } from "helpers/formSchemaSignIn";

import { useDispatch } from "react-redux";
import { setUser } from "redux/features/sign-in/setUserSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useSignIn from "../services/useSignIn.service";

interface InputSignIn {
  username: string;
  reqPassword: string;
  remember_account: boolean;
}

export function useFormSignIn() {
  const { formState, ...methods } = useForm<InputSignIn>({
    defaultValues: { username: "", reqPassword: "", remember_account: false },
    resolver: yupResolver(formSchemaSignIn),
  });

  const { mutate, isLoading } = useSignIn();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (inputSign: InputSignIn) => {
    mutate(inputSign, {
      onSuccess(data) {
        const { accessToken, ...user } = data!;

        localStorage.setItem(
          import.meta.env.VITE_ACCESS_TOKEN,
          data!.accessToken
        );

        console.log(user, 123);

        dispatch(setUser(user));
        navigate("/", { replace: true });
      },
      onError() {
        dispatch(setUser(null));
      },
    });
  };

  return {
    methods,
    formState,
    onSubmit,
    isLoading,
  };
}
