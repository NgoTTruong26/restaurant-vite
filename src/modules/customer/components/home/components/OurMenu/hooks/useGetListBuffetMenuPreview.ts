import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { GetBuffetMenuDTO } from 'modules/customer/components/menu/dto/get-dish.dto';

export default function useGetListBuffetMenuPreview() {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ['get_list_buffet_menu_preview'],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetBuffetMenuDTO[]>>(
        '/buffet/list-buffet-menu',
      );

      return data.data;
    },
  });

  return { status, data, error, isFetching, isLoading };
}
