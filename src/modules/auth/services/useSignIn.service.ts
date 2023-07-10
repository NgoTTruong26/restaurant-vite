import { useMutation } from "@tanstack/react-query";
import { SignInDTO } from "../dto/sign-in.dto";
import { IAxiosResponse, api } from "configs/api";
import { IAdmin } from "../dto/admin.dto";

export default function useSignIn() {
  return useMutation((data: SignInDTO) =>
    api.post<IAxiosResponse<IAdmin>>("/auth/sign-in", data)
  );
}
