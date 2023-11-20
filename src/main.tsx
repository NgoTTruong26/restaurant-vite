import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from 'configs/router.tsx';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from 'redux/app/store.ts';
import 'styles/index.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5000,
    },
    mutations: {
      retry: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Suspense fallback={<div>loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <RouterProvider router={router} />
          <Toaster position="top-center" reverseOrder={false} />
        </NextUIProvider>
      </QueryClientProvider>
    </Suspense>
  </Provider>,
);
