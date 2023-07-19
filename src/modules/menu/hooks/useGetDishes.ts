import { QueryFunctionContext, useInfiniteQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetListDishDTO, GetSetDishDTO } from "../dto/dish.dto";

export interface IPageParam {
  idBuffetMenu?: string;
  idSetDish?: string;
  limit?: string;
  offset?: number;
}

interface Props {
  buffet: string;
  setDish: string;
}

export default function useGetDishes({ buffet, setDish }: Props) {
  const {
    status,
    data,
    error,
    isFetching,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["get_dishes", buffet, setDish],
    async ({
      pageParam = {
        idBuffetMenu: buffet,
        idSetDish: setDish,
        limit: "4",
        offset: 0,
      },
    }: QueryFunctionContext<string[], IPageParam>) => {
      if (!pageParam) {
        return undefined;
      }

      const res = await api.get<IAxiosResponse<GetListDishDTO>>(
        `/buffet/dishes?limit=${pageParam.limit}&offset=${pageParam.offset}&buffet_menu_id=${pageParam.idBuffetMenu}&set_dish_id=${pageParam.idSetDish}`
      );

      return res.data.data;
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.nextPage
          ? {
              idBuffetMenu: lastPage?.idBuffetMenu,
              idSetDish: lastPage?.idSetDish,
              limit: "4",
              offset: lastPage.nextPage,
            }
          : undefined;
      },
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5000 * 60 * 60,
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
    hasNextPage,
  };
}
