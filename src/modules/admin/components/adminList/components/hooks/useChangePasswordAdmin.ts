import { useMutation } from "@tanstack/react-query";
import { IAxiosResponse } from "configs/api";
import AxiosInterceptorResponse from "configs/axiosInterceptor";

import { toast } from "react-hot-toast";
import { ChangePasswordDTO } from "../../dto/update-admin-profile.dto";
import { GetAdminDTO } from "../../dto/get-admins.dto";

export default function useChangePasswordAdmin() {
  const token: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN_ADMIN
  );

  return useMutation(async (inputChangePassword: ChangePasswordDTO) => {
    const data = await toast.promise(
      AxiosInterceptorResponse(() => {}).put<IAxiosResponse<GetAdminDTO>>(
        "admin/change-password",
        inputChangePassword,
        {
          headers: {
            admin_authorization: token ? `Bearer ${token}` : undefined,
          },
        }
      ),
      {
        loading: "Loading",
        success: "Change Password Success",
        error: "Change Password failed",
      },
      {
        position: "top-right",
      }
    );

    return data.data;
  });
}
