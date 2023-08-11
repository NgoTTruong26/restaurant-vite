import { useMutation } from "@tanstack/react-query";
import { IAxiosResponse } from "configs/api";
import AxiosInterceptorResponse from "configs/axiosInterceptor";
import { IUpdateProfileDTO } from "modules/user/dto/update-profile.dto";
import { GetUserProfileDTO } from "../dto/get-user.dto";
import { DataUpdateDTO } from "../dto/update-user.dto";

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
    console.log(dataUpdateProfile);

    const data = await AxiosInterceptorResponse(() => {}).put<
      IAxiosResponse<GetUserProfileDTO>
    >("users/update-profile", dataUpdateProfile);
    return data.data;
  });
}
