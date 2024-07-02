import { useQuery } from 'react-query';
import { useState } from 'react';
import fetchNews from '../../services/fetchNews';
import { mockFetchNews } from '../../utils/mockFetch';
import HeroCard from '../../components/HeroCard/HeroCard';
import './home.css';
import Card from '../../components/Card/Card';
import MoreNewsButton from '../../components/MoreNewsButton/MoreNewsButton';

function Temp() {
  const [page, setPage] = useState(12);
  const { data: newsData, isLoading, isError } = useQuery({
    queryFn: () => fetchNews(page),
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
    <main className="d-flex flex-column align-items-center mt-3 mb-3">
      {newsData && (
        <section className="hero-container">
          <HeroCard news={ newsData[0] } />
        </section>
      )}
      <section className="row row-cols-1 row-cols-md-3 g-4 mt-5 news-section">
        {newsData && newsData.slice(1).map((news) => (
          <div className="col news-card" key={ news.id }>
            <Card news={ news } />
          </div>
        ))}
      </section>
      <MoreNewsButton setPage={ setPage } />
    </main>
  );
}

export default Temp;
