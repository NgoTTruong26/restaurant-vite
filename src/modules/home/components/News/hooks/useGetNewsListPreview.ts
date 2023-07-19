import { useQuery } from "@tanstack/react-query";
import { IAxiosResponse, api } from "configs/api";
import { GetNewsDTO } from "modules/news/dto/news.dto";

export default function useGetListNewsPreview() {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ["get_list_news_preview"],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetNewsDTO[]>>(
        `/news/news-preview`
      );

      return data.data;
    },
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 5000,
  });

  return { status, data, error, isFetching, isLoading };
}
