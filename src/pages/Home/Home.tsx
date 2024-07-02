import { useQuery } from 'react-query';
import { useState } from 'react';
import fetchNews from '../../services/fetchNews';
import { mockFetchNews } from '../../utils/mockFetch';

function Temp() {
  const [page, setPage] = useState(10);
  const { data: newsData, isLoading, isError } = useQuery({
    queryFn: () => mockFetchNews(),
    queryKey: ['news', page],
  });

  if (isLoading) return <h4>Carregando...</h4>;

  if (isError) {
    return (
      <div>
        <h4>Algo deu errado!</h4>
      </div>
    );
  }

  return (
    <main>
      {newsData?.map((news) => news.titulo)}
      <button
        onClick={ () => setPage((prevPage) => prevPage + 10) }
        aria-label="Carregar mais notícias"
      >
        Get more news
      </button>
    </main>
  );
}

export default Temp;
