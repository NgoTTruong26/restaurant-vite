import { useMutation } from "@tanstack/react-query";
import { IAxiosResponse } from "configs/api";
import AxiosInterceptorResponse from "configs/axiosInterceptor";
import { IUpdateProfileDTO } from "modules/user/dto/update-profile.dto";
import { GetUserProfileDTO } from "../dto/get-user.dto";
import { DataUpdateDTO } from "../dto/update-user.dto";
import { toast } from "react-hot-toast";

export default function useUpdateProfile() {
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
      AxiosInterceptorResponse(() => {}).put<IAxiosResponse<GetUserProfileDTO>>(
        "users/update-profile",
        dataUpdateProfile
      ),
      {
        loading: "Loading",
        success: "Update Profile Success",
        error: "Update Profile failed",
      }
    );

    return data.data;
  });
}
