import { useMutation } from "@tanstack/react-query";
import { SignInDTO } from "../dto/sign-in.dto";
import { IAxiosResponse, api } from "configs/api";
import { IUser } from "modules/user/interfaces/user.interface";
import { toast } from "react-hot-toast";

export default function useSignIn() {
  return useMutation(async (inputSign: SignInDTO) => {
    const data = await toast.promise(
      api.post<IAxiosResponse<IUser>>("/auth/sign-in", inputSign),
      {
        loading: "Loading",
        success: "SignIn Success",
        error: "SignIn failed",
      }
    );

    return data.data.data;
  });
}
