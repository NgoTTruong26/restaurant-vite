import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse, api } from 'configs/api';
import { GetAdminListDTO } from '../dto/get-admins.dto';

export default function useGetAdminList(
  page: number = 1,
  filterRole?: string,
  searchCharacters?: string,
) {
  const getAdminList = useQuery({
    queryKey: ['get_admin_list', page, filterRole, searchCharacters],

    queryFn: async () => {
      const { data } = await api.get<IAxiosResponse<GetAdminListDTO | null>>(
        `/admin/admin-list?${
          filterRole
            ? filterRole !== 'default'
              ? `role=${filterRole}&`
              : ''
            : ''
        }${searchCharacters ? `search=${searchCharacters}&` : ''}page=${page}`,
      );

      return data.data;
    },
  });

  return getAdminList;
}
