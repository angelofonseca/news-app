import useNews from '../../hooks/useNews';
import Card from '../Card/Card';
import Favorites from '../Favorites/Favorites';

function RenderCategory() {
  const { categorie, newsData } = useNews();
  switch (categorie) {
    case 'noticia':
      return (
        newsData?.pages.map((page) => (
          <section
            className="news-section"
            key={ page?.page }
          >
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
              {page?.items?.slice(1).map((news) => (
                <div className="col news-card" key={ news.id }>
                  <Card news={ news } />
                </div>
              ))}
            </div>
          </section>
        ))
      );

    case 'favoritas':
      return <Favorites />;
      break;

    default:
      break;
  }
  return (
    <div>RenderCategory</div>
  );
}

export default RenderCategory;
