import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetBuffetMenuDTO } from "../dto/get-dish.dto";

export default function useGetListBuffetMenu() {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ["get_list_buffetMenu"],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetBuffetMenuDTO[]>>(
        "/buffet/list-buffet-menu"
      );

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return { status, data, error, isFetching, isLoading };
}
