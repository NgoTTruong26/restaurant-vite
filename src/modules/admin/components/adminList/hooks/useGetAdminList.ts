import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiAdmin } from 'configs/axiosInterceptor';
import useCheckAuth from 'modules/customer/components/auth/hooks/useCheckAuth';
import { GetAdminListDTO } from '../dto/get-admins.dto';

export default function useGetAdminList(
  page: number = 1,
  filterRole?: string,
  searchCharacters?: string,
) {
  const { signOut } = useCheckAuth();

  const getAdminList = useQuery({
    queryKey: ['get_admin_list', page, filterRole, searchCharacters],

    queryFn: async () => {
      const { data } = await ApiAdmin(signOut).get<
        IAxiosResponse<GetAdminListDTO>
      >(
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
