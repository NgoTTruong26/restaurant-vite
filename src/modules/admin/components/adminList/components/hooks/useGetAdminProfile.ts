import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse } from "configs/api";
import AxiosInterceptorResponse from "configs/axiosInterceptor";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "redux/features/sign-in/setUserSlice";
import { GetAdminDTO } from "../../dto/get-admins.dto";

export default function useGetAdminProfile(adminId: string) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const apiInterceptor = AxiosInterceptorResponse(() => {});

  const token: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN_ADMIN
  );

  const getProfile = useQuery({
    queryKey: [`get_profile_admin_${adminId}`],
    queryFn: async () => {
      try {
        const response = await apiInterceptor.get<IAxiosResponse<GetAdminDTO>>(
          `/admin/get-admin-by-id/${adminId}`,
          {
            headers: {
              admin_authorization: token ? `Bearer ${token}` : undefined,
            },
          }
        );

        return response.data.data;
      } catch (error) {
        /*  alert("Đăng nhập hết hạn");
        dispatch(setUser(null));
        localStorage.removeItem("access_token");
        navigate("/auth/sign-in"); */
        return null;
      }
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
    refetchOnMount: "always",
  });

  return getProfile;
}
