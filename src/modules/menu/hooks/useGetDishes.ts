import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetSetDishDTO } from "../dto/dish.dto";

export interface IPageParam {
  idBuffetMenu?: string;
  idSetDish?: string;
  limit?: string;
  offset?: string;
}

export default function useGetDishes() {
  const {
    status,
    data,
    error,
    isFetching,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["get_dishes"],
    async ({ pageParam }: QueryFunctionContext<string[], IPageParam>) => {
      console.log(pageParam);

      if (!pageParam) {
        return undefined;
      }

      const res = await api.get<IAxiosResponse<GetSetDishDTO>>(
        `/buffet/dishes?limit=${pageParam.limit}&offset=${pageParam.offset}&buffet_menu_id=${pageParam.idBuffetMenu}&set_dish_id=${pageParam.idSetDish}`
      );

      return res.data.data;
    }
  );

  return {
    status,
    data,
    error,
    isLoading,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
  };
}
