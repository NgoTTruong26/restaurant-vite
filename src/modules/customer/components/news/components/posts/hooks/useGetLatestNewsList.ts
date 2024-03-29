import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { GetNewsDTO } from 'modules/customer/components/news/dto/get-news.dto';

export interface INewsParam {
  limit?: number;
  idPost: string;
}

export default function useGetLatestNewsList({
  limit = 4,
  idPost,
}: INewsParam) {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ['get_latest_news_list', idPost],

    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetNewsDTO[]>>(
        `/news/news-latest?limit=${limit}&id=${idPost}`,
      );

      return data.data;
    },
    /*     */
  });

  return { status, data, error, isFetching, isLoading };
}
