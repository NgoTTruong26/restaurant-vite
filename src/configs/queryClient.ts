import { QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

function handleQueryError(error: unknown) {
  let message = '';

  if (error instanceof AxiosError)
    message = error.response?.data?.message || error.message;
  else if (error instanceof Error)
    message = `Execution error: ${error.message}`;
  toast.error(message);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      keepPreviousData: true,
    },
    mutations: {
      retry: 0,
      onError: handleQueryError,
    },
  },
});
