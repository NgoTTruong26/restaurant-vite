import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { RootState } from 'redux/app/store';
import useCheckAuthAdmin from './components/auth/hooks/useCheckAuthAdmin';

export default function AppAdmin() {
  const { mutate: checkAuth, isSuccess, isError } = useCheckAuthAdmin();

  const { value: admin, status: statusRedux } = useSelector(
    (state: RootState) => state.setAdmin,
  );

  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!admin && statusRedux === 'idle') {
      navigate('/admin/auth/sign-in');
    }
  }, [admin, statusRedux]);

  if (isSuccess || isError) {
    return <Outlet />;
  }

  return <div>Loading check auth</div>;
}
