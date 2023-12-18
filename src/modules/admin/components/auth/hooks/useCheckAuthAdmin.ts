import { useMutation } from '@tanstack/react-query';
import { IAxiosResponse } from 'configs/api';
import { ApiAdmin } from 'configs/axiosInterceptor';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAdmin } from 'redux/features/auth-admin/setAdminSlice';
import { GetPreviewProfileAdminDTO } from '../dto/get-profile-admin.dto';

export default function useCheckAuthAdmin() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem(import.meta.env.VITE_ACCESS_TOKEN_ADMIN);
    Cookies.remove(import.meta.env.VITE_REFRESH_TOKEN_ADMIN);
    dispatch(setAdmin(null));
    navigate('/');
    return;
  };

  const apiAdmin = ApiAdmin(() => {});

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
    signOut,
  };
}
