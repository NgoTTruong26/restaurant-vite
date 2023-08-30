import { useMutation } from "@tanstack/react-query";
import { IAxiosResponse } from "configs/api";
import AxiosInterceptorResponse from "configs/axiosInterceptor";
import { IUpdateProfileDTO } from "modules/user/dto/update-profile.dto";
import { toast } from "react-hot-toast";
import { DataUpdateDTO } from "modules/user/components/accountInformation/dto/update-user.dto";
import { GetAdminDTO } from "../../dto/get-admins.dto";

export default function useUpdateAdminProfile() {
  return useMutation(async (inputUpdateProfile: IUpdateProfileDTO) => {
    const { day, month, year, ...other } = inputUpdateProfile;

    const dataUpdateProfile: DataUpdateDTO = {
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
        "users/update-profile",
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
