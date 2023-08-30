import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetRoleListDTO } from "../dto/get-roles.dto";

export default function useGetRoles() {
  const token: string | null = localStorage.getItem(
    import.meta.env.VITE_ACCESS_TOKEN_ADMIN
  );

  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ["get_admin_roles"],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetRoleListDTO>>(
        "admin/get-roles",
        {
          headers: {
            admin_authorization: token ? `Bearer ${token}` : undefined,
          },
        }
      );

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return { status, data, error, isFetching, isLoading };
}
