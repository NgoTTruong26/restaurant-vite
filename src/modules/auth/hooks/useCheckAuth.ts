import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { useDispatch } from "react-redux";
import { setUser } from "redux/features/sign-in/setUserSlice";
import AxiosInterceptorResponse from "configs/axiosInterceptor";
import { GetPreviewProfileDTO } from "modules/user/components/accountInformation/dto/get-user.dto";

export default function useCheckAuth() {
  const dispatch = useDispatch();

  const apiInterceptor = AxiosInterceptorResponse(() => {});

  const token: string | null =
    localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN) || null;

  const { status, data, error, isFetching } = useQuery({
    queryKey: ["check_auth"],
    queryFn: async () => {
      const { data } = await apiInterceptor.get<
        IAxiosResponse<GetPreviewProfileDTO>
      >("/auth/profile", {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });

      if (data.data) {
        dispatch(setUser(data.data));
        return data;
      }

      localStorage.removeItem(import.meta.env.VITE_ACCESS_TOKEN);
      dispatch(setUser(null));
      return data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return { status, data, error, isFetching };
}
