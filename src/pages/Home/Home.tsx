import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import './home.css';
import useNews from '../../hooks/useNews';
import Loading from '../../components/Loading/Loading';
import RenderCategory from '../../components/RenderCategory/RenderCategory';
import HeroContainer from '../../components/HeroContainer/HeroContainer';

function Home() {
  const { ref, inView } = useInView();
  const { isFetchingNextPage, isLoading, fetchNextPage } = useNews();

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return (
      <div className="loading-center">
        <Loading />
      </div>
    );
  }

  return (
    <main className="d-flex flex-column align-items-center mt-3 mb-5">
      <HeroContainer />
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
