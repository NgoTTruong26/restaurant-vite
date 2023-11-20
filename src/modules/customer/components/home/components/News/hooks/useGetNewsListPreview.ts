import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { GetNewsDTO } from 'modules/customer/components/news/dto/get-news.dto';

export default function useGetNewsListPreview() {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ['get_list_news_preview'],
    queryFn: async () => {
      const { data } =
        await api.get<IAxiosResponse<GetNewsDTO[]>>(`/news/news-preview`);

      return data.data;
    },
  });

  return { status, data, error, isFetching, isLoading };
}
