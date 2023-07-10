import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { useDispatch } from "react-redux";
import { setUser } from "redux/features/sign-in/setUserSlide";
import { IAdmin } from "../dto/admin.dto";

export default function useCheckAuth() {
  const dispatch = useDispatch();

  const token: string | null =
    localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN) || null;

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["check_auth"],
    queryFn: async () => {
      const { data } = await api.get<
        IAxiosResponse<Omit<IAdmin, "accessToken">>
      >("/auth/profile", {
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
