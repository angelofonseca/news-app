import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from '../App';
import { MOCK_TRUE_RESPONSE } from '../utils/mockResponse';

mockAllIsIntersecting(true);
const queryClient = new QueryClient();

describe('Testa o hook useNews', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch')
      .mockResolvedValue(MOCK_TRUE_RESPONSE);
  });
  afterEach(() => { vi.clearAllMocks(); });
  it('Testa se ocorre um erro quando não tem provider', async () => {
    expect(() => {
      render(
        <QueryClientProvider client={ queryClient }>
          <App />
        </QueryClientProvider>,
      );
    }).toThrowError('Context necessita do Provider');
  });
});
