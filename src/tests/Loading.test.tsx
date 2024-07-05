import { QueryClient, QueryClientProvider, useInfiniteQuery } from 'react-query';
// import { renderHook } from '@testing-library/react-hooks';
import App from '../App';
import { it } from 'vitest';

const queryClient = new QueryClient();
const wrapper = () => (
  <QueryClientProvider client={ queryClient }><App /></QueryClientProvider>
);

function useFetchData() {
    return useInfiniteQuery({
      queryKey: ['fetchData'],
      queryFn: () => request('/api/data'),
    })
  }

const { result, waitFor } = renderHook(() => useCustomHook(), { wrapper });

await waitFor(() => result.current.isSuccess);

it('', () => {
    await waitFor(() =>
        expect(mockFn).toHaveBeenCalledWith('some arg'),
        )
        })
})

expect(result.current.data).toEqual('Hello');
