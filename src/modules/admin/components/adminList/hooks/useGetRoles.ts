import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetRoleListDTO } from "../dto/get-roles.dto";

export default function useGetRoles() {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ["get_admin_roles"],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetRoleListDTO>>(
        "admin/get-roles"
      );

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return { status, data, error, isFetching, isLoading };
}
