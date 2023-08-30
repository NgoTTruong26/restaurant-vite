import { useMutation } from "@tanstack/react-query";
import { IUpdateRolesAdminDTO } from "../../dto/modify-role-admin.dto";
import { toast } from "react-hot-toast";
import AxiosInterceptorResponse from "configs/axiosInterceptor";
import { IAxiosResponse } from "configs/api";
import { GetAdminDTO } from "../../dto/get-admins.dto";
import { queryClient } from "main";

interface Props {
  currPage: number;
  filterRole?: string;
}

export default function useUpdateAdminRoles({ currPage, filterRole }: Props) {
  const token: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN_ADMIN
  );

  return useMutation(
    async (inputUpdateProfile: IUpdateRolesAdminDTO) => {
      const data = await toast.promise(
        AxiosInterceptorResponse(() => {}).put<IAxiosResponse<GetAdminDTO>>(
          "admin/update-roles-admin",
          inputUpdateProfile,
          {
            headers: {
              admin_authorization: token ? `Bearer ${token}` : undefined,
            },
          }
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
    },
    {
      onSuccess: async (data) => {
        queryClient.setQueryData(
          [`get_profile_admin_${data.data?.id}`],
          data.data
        );
        await toast.promise(
          queryClient.refetchQueries(
            filterRole
              ? ["get_admin_list_page", currPage, filterRole]
              : ["get_admin_list_page", currPage]
          ),
          {
            loading: "Fetching admin list...",
            success: "Fetching admin list Success",
            error: "Fetching admin list failed",
          },
          {
            position: "top-right",
          }
        );
      },
    }
  );
}
