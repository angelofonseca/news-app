import { QueryClient, QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import './app.css';
import NewsProvider from './context/NewsProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <NewsProvider>
        <Header />
        <Home />
      </NewsProvider>
    </QueryClientProvider>
  );
}

export default App;
