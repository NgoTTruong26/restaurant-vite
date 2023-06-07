import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchemaSignIn } from "helpers/formSchemaSignIn";
import useSignIn from "../services/useSignIn";
import { useDispatch } from "react-redux";
import { setUser } from "redux/features/sign-in/setUserSlide";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

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
        const { accessToken, ...user } = data.data!;

        localStorage.setItem(
          import.meta.env.VITE_ACCESS_TOKEN,
          data.data!.accessToken
        );
        dispatch(setUser(user));
        toast.success("Sign In Success");
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
