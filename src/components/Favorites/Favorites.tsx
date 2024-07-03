import { NewsType } from '../../types';
import Card from '../Card/Card';

function Favorites() {
  const favoritesList = JSON.parse(localStorage
    .getItem('favorites') || '[]') as NewsType[];

  return (
    <>
      {favoritesList.map((news) => (
        <div className="col news-card" key={ news.id }>
          <Card news={ news } />
        </div>
      ))}
    </>
  );
}

export default Favorites;
