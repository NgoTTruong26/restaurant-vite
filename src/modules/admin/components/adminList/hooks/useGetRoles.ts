import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiAdmin } from 'configs/axiosInterceptor';
import useCheckAuth from 'modules/customer/components/auth/hooks/useCheckAuth';
import { GetRoleListDTO } from '../dto/get-roles.dto';

export default function useGetRoles() {
  const { signOut } = useCheckAuth();

  const { status, data, error, isFetching, isLoading } = useQuery({
    queryKey: ['get_admin_roles'],
    queryFn: async () => {
      const { data } =
        await ApiAdmin(signOut).get<IAxiosResponse<GetRoleListDTO>>(
          'admin/get-roles',
        );

      return data.data;
    },
  });

  return { status, data, error, isFetching, isLoading };
}
