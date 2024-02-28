import Loading from 'components/Loading';
import ScrollToTop from 'components/ScrollToTop';
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

  if (isSuccess || isError)
    return (
      <>
        <ScrollToTop />
        <Outlet />
      </>
    );

  return <Loading />;
}

export default AppCustomer;
