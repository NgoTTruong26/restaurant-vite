import { NextUIProvider } from '@nextui-org/react';
import { QueryClientProvider } from '@tanstack/react-query';
import Loading from 'components/Loading';
import { queryClient } from 'configs/queryClient';
import { router } from 'configs/router.tsx';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from 'redux/app/store.ts';
import 'styles/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <RouterProvider router={router} />
          <Toaster position="top-center" reverseOrder={false} />
        </NextUIProvider>
      </QueryClientProvider>
    </Suspense>
  </Provider>,
);
