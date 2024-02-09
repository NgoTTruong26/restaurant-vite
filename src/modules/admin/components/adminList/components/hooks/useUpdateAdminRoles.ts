import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiAdmin } from 'configs/apiAdmin';
import { queryClient } from 'configs/queryClient';
import { toast } from 'react-hot-toast';
import { GetAdminDTO } from '../../dto/get-admins.dto';
import { IUpdateRolesAdminDTO } from '../../dto/modify-role-admin.dto';

interface Props {
  currPage: number;
  filterRole: string[];
  searchCharacters?: string;
}

export default function useUpdateAdminRoles({
  currPage,
  filterRole,
  searchCharacters,
}: Props) {
  return useMutation(
    async (inputUpdateProfile: IUpdateRolesAdminDTO) => {
      const data = await toast.promise(
        apiAdmin.put<IAxiosResponse<GetAdminDTO>>(
          'admin/update-roles-admin',
          inputUpdateProfile,
        ),
        {
          loading: 'Loading',
          success: 'Update Profile Success',
          error: 'Update Profile failed',
        },
        {
          position: 'top-right',
        },
      );

      return data.data;
    },
    {
      onSuccess: async (data) => {
        queryClient.setQueryData(
          [`get_profile_admin_${data.data?.id}`],
          data.data,
        );
        await toast.promise(
          queryClient.refetchQueries([
            'get_admin_list',
            currPage,
            filterRole,
            searchCharacters,
          ]),
          {
            loading: 'Fetching admin list...',
            success: 'Fetching admin list Success',
            error: 'Fetching admin list failed',
          },
          {
            position: 'top-right',
          },
        );
      },
    },
  );
}
