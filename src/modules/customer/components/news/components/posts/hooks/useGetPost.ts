import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { GetNewsDTO } from 'modules/customer/components/news/dto/get-news.dto';

export default function useGetPost(id?: string) {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ['get_post', id],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetNewsDTO>>(`/news/${id}`);

      return data.data;
    },
  });

  return { status, data, error, isFetching, isLoading };
}
