import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { mockFetchNews } from '../../utils/mockFetch';
import HeroCard from '../../components/HeroCard/HeroCard';
import './home.css';
import Card from '../../components/Card/Card';
import fetchNews from '../../services/fetchNews';

function Home() {
  const {
    data: newsData,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['newsData'],
    queryFn: ({ pageParam = 1 }) => fetchNews(pageParam),
    getNextPageParam: (lastPage) => lastPage?.nextPage,
  });

  const { ref, inView } = useInView();

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
          className="row row-cols-1 row-cols-md-3 g-4 mt-5 news-section"
          key={ page?.page }
        >
          {page?.items?.slice(1).map((news) => (
            <div className="col news-card" key={ news.id }>
              <Card news={ news } />
            </div>
          ))}
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
