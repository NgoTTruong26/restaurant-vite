import { useMutation } from "@tanstack/react-query";
import { IAxiosResponse } from "configs/api";
import AxiosInterceptorResponse from "configs/axiosInterceptor";

import { toast } from "react-hot-toast";
import { ChangePasswordDTO } from "../dto/update-admin-profile.dto";
import { GetAdminDTO } from "../dto/get-admins.dto";

export default function useChangePasswordAdmin() {
  return useMutation(async (inputChangePassword: ChangePasswordDTO) => {
    const data = await toast.promise(
      AxiosInterceptorResponse(() => {}).put<IAxiosResponse<GetAdminDTO>>(
        "admin/change-password",
        inputChangePassword
      ),
      {
        loading: "Loading",
        success: "Change Password Success",
        error: "Change Password failed",
      }
    );

    return data.data;
  });
}
