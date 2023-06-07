import { useMutation } from "@tanstack/react-query";
import { SignInDTO } from "../dto/sign-in.dto";
import { IAxiosResponse, api } from "configs/api";
import { ResponseAuth } from "modules/user/interfaces/user.interface";

export default function useSignIn() {
  return useMutation((data: SignInDTO) =>
    api.post<IAxiosResponse<ResponseAuth>>("/v1/auth/sign-in", data)
  );
}
