import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { ResponseAuth } from "modules/user/interfaces/user.interface";
import { useDispatch } from "react-redux";
import { setUser } from "redux/features/sign-in/setUserSlide";

export default function useCheckAuth() {
  const dispatch = useDispatch();

  const token: string | null =
    localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN) || null;

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const { data } = await api.get<
        IAxiosResponse<Omit<ResponseAuth, "accessToken">>
      >("/v1/auth/profile", {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });

      if (data.data) {
        dispatch(setUser(data.data));
        return data;
      }

      dispatch(setUser(null));
      return data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return { status, data, error, isFetching };
}
