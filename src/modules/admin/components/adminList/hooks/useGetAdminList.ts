import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetAdminListDTO } from "../dto/get-admins.dto";

export default function useGetAdminList(page: number = 1, filterRole?: string) {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: filterRole
      ? ["get_admin_list_page", page, filterRole]
      : ["get_admin_list_page", page],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetAdminListDTO | null>>(
        `/admin?${
          filterRole
            ? filterRole !== "default"
              ? `role=${filterRole}&`
              : ""
            : ""
        }page=${page}`
      );

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return { status, data, error, isFetching, isLoading };
}
