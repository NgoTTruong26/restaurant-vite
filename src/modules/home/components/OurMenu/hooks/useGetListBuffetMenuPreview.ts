import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetBuffetMenuDTO } from "modules/menu/dto/dish.dto";

export default function useGetListBuffetMenuPreview() {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ["get_list_buffet_menu_preview"],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetBuffetMenuDTO[]>>(
        "/buffet/buffet-menu"
      );

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return { status, data, error, isFetching, isLoading };
}
