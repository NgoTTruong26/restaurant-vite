import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiAdmin } from 'configs/apiAdmin';
import { toast } from 'react-hot-toast';
import { GetAdminListDTO, GetAdminListRequest } from '../dto/get-admins.dto';

async function getAdminList(request: GetAdminListRequest) {
  try {
    return (
      await apiAdmin.post<IAxiosResponse<GetAdminListDTO>>(
        '/admin/admin-list',
        request,
      )
    ).data.data;
  } catch (error) {
    toast.error("Can't get admin list");
  }
}

export default function useGetAdminList({
  page,
  role,
  search,
}: GetAdminListRequest) {
  return useQuery({
    queryKey: ['get-admin-list', page, role, search],
    queryFn: () => getAdminList({ page, role, search }),
  });
}

/* const getAdminList = useQuery({
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

return getAdminList; */
