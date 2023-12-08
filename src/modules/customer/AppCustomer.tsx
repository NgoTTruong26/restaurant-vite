import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import useCheckAuth from './components/auth/hooks/useCheckAuth';

// Create a client

function AppCustomer() {
  const { checkAuth } = useCheckAuth();

  const { mutate, isLoading, isSuccess, isError } = checkAuth;

  useEffect(() => {
    mutate();
  }, []);

  console.log(isLoading);

  if (isSuccess || isError) return <Outlet />;

  return <div>Loading</div>;
}

export default AppCustomer;
