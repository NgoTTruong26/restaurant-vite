import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { apiAdmin } from 'configs/apiAdmin';
import { useDispatch } from 'react-redux';
import { setAdmin } from 'redux/features/auth-admin/authAdminSlice';
import { GetPreviewProfileAdminDTO } from '../dto/get-profile-admin.dto';

export default function useCheckAuthAdmin() {
  const dispatch = useDispatch();

  const accessTokenAdmin = import.meta.env.VITE_ACCESS_TOKEN_ADMIN;

  const checkAuth = useMutation(
    () =>
      apiAdmin.post<IAxiosResponse<GetPreviewProfileAdminDTO>>(
        import.meta.env.VITE_API_ADMIN + import.meta.env.VITE_API_CHECK_AUTH,
      ),
    {
      onSuccess: (res) => {
        if (res?.data.data) {
          return dispatch(setAdmin(res.data.data));
        }

        localStorage.removeItem(accessTokenAdmin);
        dispatch(setAdmin(null));
      },

      onError: () => {
        localStorage.removeItem(accessTokenAdmin);
        dispatch(setAdmin(null));
      },
    },
  );

  return {
    checkAuth,
  };
}
