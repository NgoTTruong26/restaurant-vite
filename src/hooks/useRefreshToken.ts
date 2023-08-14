import { useMutation } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";

export default function useRefreshToken() {
  console.log(1234);

  const mutation = useMutation({
    mutationKey: ["refresh_token"],
    mutationFn: async () => {
      const { data } = await api.post<IAxiosResponse<RefreshTokenDTO>>(
        "/auth/refresh-token"
      );
      return data.data;
    },
  });

  return mutation;
}
