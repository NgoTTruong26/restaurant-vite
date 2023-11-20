import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { GetBuffetMenuDTO } from 'modules/customer/components/menu/dto/get-dish.dto';

interface Props {
  idBuffetMenu: string;
}

export default function useGetBuffetMenu({ idBuffetMenu }: Props) {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: [`get_buffet_menu_${idBuffetMenu}`],
    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetBuffetMenuDTO>>(
        `/buffet/buffet-menu/${idBuffetMenu}`,
      );

      return data.data;
    },
  });

  return { status, data, error, isFetching, isLoading };
}
