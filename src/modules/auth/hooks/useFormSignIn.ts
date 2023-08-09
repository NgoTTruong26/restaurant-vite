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

  const onSubmit = (data: InputSignIn) => {
    mutate(data, {
      onSuccess({ data }) {
        toast.success("Sign In Success");
        const { accessToken, ...user } = data.data!;

        localStorage.setItem(
          import.meta.env.VITE_ACCESS_TOKEN,
          data.data!.accessToken
        );
        dispatch(setUser(user));
        navigate("/", { replace: true });
      },
      onError() {
        toast.error("Sign In Failure");
        dispatch(setUser(null));
      },
      onSettled() {
        toast.dismiss("loading_sign_in");
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
