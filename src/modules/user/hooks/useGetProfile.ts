import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse } from "configs/api";
import AxiosInterceptorResponse from "configs/axiosInterceptor";
import { IUser } from "../interfaces/user.interface";
import { useDispatch } from "react-redux";
import { setUser } from "redux/features/sign-in/setUserSlice";
import { useNavigate } from "react-router-dom";

interface Props {
  userId: string;
}

export default function useGetProfile({ userId }: Props) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const apiInterceptor = AxiosInterceptorResponse(() => {});

  const token: string | null =
    localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN) || null;

  const getProfile = useQuery({
    queryKey: [`get_profile_${userId}`],
    queryFn: async () => {
      try {
        const response = await apiInterceptor.get<
          IAxiosResponse<Omit<IUser, "accessToken">>
        >("/auth/profile", {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        });

        return response.data.data;
      } catch (error) {
        alert("Đăng nhập hết hạn");
        console.log(error);
        dispatch(setUser(null));
        localStorage.removeItem("access_token");
        navigate("/auth/sign-in");
        return null;
      }
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return getProfile;
}
