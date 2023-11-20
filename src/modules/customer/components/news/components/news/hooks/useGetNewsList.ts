import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { GetNewsListDTO } from '../../../dto/get-news.dto';

export interface INewsParam {
  limit?: number;
  offset?: number;
}

export default function useGetNewsList(limit = 4, offset = 0) {
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
    ['get_news_list'],
    async ({
      pageParam = {
        limit,
        offset,
      },
    }: QueryFunctionContext<string[], INewsParam>) => {
      if (!pageParam) {
        return undefined;
      }

      const { data } = await api.get<IAxiosResponse<GetNewsListDTO>>(
        `/news?limit=${pageParam.limit}&offset=${pageParam.offset}`,
      );

      return data.data;
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage?.nextPage
          ? {
              limit,
              offset: lastPage.nextPage,
            }
          : undefined;
      },
    },
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
