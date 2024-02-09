import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiAdmin } from 'configs/apiAdmin';
import { GetRoleListDTO } from '../dto/get-roles.dto';

export default function useGetRoles() {
  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ['get_admin_roles'],
    queryFn: async () => {
      const { data } =
        await apiAdmin.get<IAxiosResponse<GetRoleListDTO>>('admin/get-roles');

      return data.data;
    },
  });

  return { status, data, error, isFetching, isLoading };
}
