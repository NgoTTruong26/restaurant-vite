import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useCheckAuth from './components/auth/hooks/useCheckAuth';

// Create a client

function AppCustomer() {
  const { mutate: checkAuth, isLoading, isSuccess, isError } = useCheckAuth();

  useEffect(() => {
    checkAuth();
  }, []);

  console.log(isLoading);

  if (isSuccess || isError) return <Outlet />;

  return <div>Loading</div>;
}

export default AppCustomer;
