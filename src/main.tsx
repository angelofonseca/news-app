import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.tsx';
import NewsProvider from './context/NewsProvider.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={ queryClient }>
    <NewsProvider>
      <App />
    </NewsProvider>
  </QueryClientProvider>,
);
