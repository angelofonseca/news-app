import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import HeroCard from '../../components/HeroCard/HeroCard';
import './home.css';
import Categories from '../../components/Categories/Categories';
import useNews from '../../hooks/useNews';
import Loading from '../../components/Loading/Loading';
import RenderCategory from '../../components/RenderCategory/RenderCategory';

function Home() {
  const { ref, inView } = useInView();
  const { isFetchingNextPage, newsData, isLoading, fetchNextPage } = useNews();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) return <Loading />;

  return (
    <main className="d-flex flex-column align-items-center mt-3 mb-5">
      {newsData?.pages[0]?.items[0] && (
        <section className="hero-container">
          <HeroCard news={ newsData.pages[0]?.items[0] } />
        </section>
      )}
      <Categories />
      <RenderCategory />
      <div ref={ ref }>
        {isFetchingNextPage && (
          <Loading />
        )}
      </div>
    </main>
  );
}

export default Home;
