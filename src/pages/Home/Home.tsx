import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { mockFetchNews } from '../../utils/mockFetch';
import HeroCard from '../../components/HeroCard/HeroCard';
import './home.css';
import Card from '../../components/Card/Card';
import Categories from '../../components/Categories/Categories';
import useNews from '../../hooks/useNews';

function Home() {
  const { ref, inView } = useInView();
  const { isFetchingNextPage, newsData, isLoading, fetchNextPage } = useNews();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="d-flex flex-column align-items-center mt-3 mb-5">
      {newsData?.pages[0]?.items[0] && (
        <section className="hero-container">
          <HeroCard news={ newsData.pages[0]?.items[0] } />
        </section>
      )}
      {newsData?.pages.map((page) => (
        <section
          className="news-section"
          key={ page?.page }
        >
          <Categories />
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-1 justify-content-center">
            {page?.items?.slice(1).map((news) => (
              <div className="col news-card" key={ news.id }>
                <Card news={ news } />
              </div>
            ))}
          </div>
        </section>
      ))}
      <div ref={ ref }>
        {isFetchingNextPage && (
          <h4 className="mt-5">Carregando...</h4>
        )}
      </div>
    </main>
  );
}

export default Home;
