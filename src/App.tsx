import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <Header />
      <Home />
    </QueryClientProvider>
  );
}

export default App;
