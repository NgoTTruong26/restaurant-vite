import { useMutation } from "@tanstack/react-query";
import { SignInDTO } from "../dto/sign-in.dto";
import { IAxiosResponse, api } from "configs/api";
import { IUser } from "modules/user/interfaces/user.interface";

export default function useSignIn() {
  return useMutation(
    async (data: SignInDTO) =>
      await api.post<IAxiosResponse<IUser>>("/auth/sign-in", data)
  );
}
