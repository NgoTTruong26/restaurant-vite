import { useMutation, useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";

export default function useRefreshToken() {
  return useMutation(
    async () =>
      await api.post<IAxiosResponse<RefreshTokenDTO>>("/auth/refresh-token")
  );
}
