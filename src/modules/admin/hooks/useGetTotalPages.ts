import { useQuery } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiAdmin } from 'configs/apiAdmin';

export default function useGetTotalPages<T>(url: string) {
  const getProfile = useQuery({
    queryKey: ['get_total_page_for_admin', url],
    queryFn: async () => {
      try {
        const response = await apiAdmin.get<IAxiosResponse<T>>(url);

        return response.data.data;
      } catch (error) {
        /*  alert("Đăng nhập hết hạn");
            dispatch(setUser(null));
            localStorage.removeItem("access_token");
            navigate("/auth/sign-in"); */
        return null;
      }
    },
    refetchOnMount: 'always',
  });

  return getProfile;
}
