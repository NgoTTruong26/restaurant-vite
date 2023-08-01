import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetSetDishDTO } from "modules/menu/dto/get-dish.dto";

interface Props {
  buffet?: string;
  setDish?: string;
}

export default function useGetSetDishPreview({ buffet, setDish }: Props) {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ["get_list_dish_preview", buffet, setDish],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetSetDishDTO[]>>(
        `/buffet/dishes-preview?buffet_menu_id=${buffet}`
      );

      console.log(data.data);
      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return {
    status,
    data,
    error,
    isFetching,
    isLoading,
  };
}
