import useNews from '../../hooks/useNews';
import HeroCard from '../HeroCard/HeroCard';
import './hero-container.css';

function HeroContainer() {
  const { newsData } = useNews();
  return (
    newsData?.pages[0]?.items[0] && (
      <section className="hero-container">
        <HeroCard news={ newsData.pages[0]?.items[0] } />
      </section>
    )
  );
}

export default HeroContainer;
