import { useMutation } from "@tanstack/react-query";
import { IAxiosResponse } from "configs/api";
import AxiosInterceptorResponse from "configs/axiosInterceptor";
import { toast } from "react-hot-toast";
import { GetAdminDTO } from "../../dto/get-admins.dto";
import {
  DataUpdateAdminDTO,
  IUpdateAdminProfileDTO,
} from "../../dto/update-admin-profile.dto";

export default function useUpdateAdminProfile() {
  return useMutation(async (inputUpdateProfile: IUpdateAdminProfileDTO) => {
    const { day, month, year, ...other } = inputUpdateProfile;

    const dataUpdateProfile: DataUpdateAdminDTO = {
      ...other,
    };

    if (
      !isNaN(new Date(`${month}/${parseInt(day) + 1}/${year}`).getFullYear())
    ) {
      dataUpdateProfile.dateBirth = new Date(
        `${month}/${parseInt(day) + 1}/${year}`
      );
    }
    const data = await toast.promise(
      AxiosInterceptorResponse(() => {}).put<IAxiosResponse<GetAdminDTO>>(
        "admin/update-profile",
        dataUpdateProfile
      ),
      {
        loading: "Loading",
        success: "Update Profile Success",
        error: "Update Profile failed",
      },
      {
        position: "top-right",
      }
    );

    return data.data;
  });
}
