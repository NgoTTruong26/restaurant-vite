import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiAdmin } from 'configs/apiAdmin';
import { GetRoleListDTO, GetRoleListRequest } from '../dto/get-roles.dto';

export default function useGetRoles({
  limit = 5,
  page = 1,
  search,
}: GetRoleListRequest) {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ['get_admin_roles', search, page, limit],
    queryFn: async () => {
      const { data } = await apiAdmin.get<IAxiosResponse<GetRoleListDTO>>(
        'admin/get-roles',
        {
          params: {
            limit,
            page,
            search,
          },
        },
      );

      return data.data;
    },
  });

  return { status, data, error, isFetching, isLoading };
}
