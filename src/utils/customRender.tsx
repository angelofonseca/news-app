import { render, RenderResult } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import userEvent, { UserEvent } from '@testing-library/user-event';
import NewsProvider from '../context/NewsProvider';

type CustomRenderResult = RenderResult & {
  user: UserEvent;
};

function customRender(ui: JSX.Element, options = {}): CustomRenderResult {
  const queryClient = new QueryClient();
  const result = render(
    <QueryClientProvider client={ queryClient }>
      <NewsProvider>{ui}</NewsProvider>
    </QueryClientProvider>,
    options,
  );

  return {
    user: userEvent.setup(),
    ...result,
  };
}

export default customRender;
