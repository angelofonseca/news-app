import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { NewsType } from '../../types';

function Favorites() {
  const [favorites, setFavorites] = useState<NewsType[]>([]);
  useEffect(() => {
    const getFavoritesList = JSON
      .parse(localStorage.getItem('favorites') || '[]') as NewsType[];
    setFavorites(getFavoritesList);
  }, []);
  return (
    <>
      {favorites.map((news) => (
        <div className="col news-card" key={ news.id }>
          <Card news={ news } />
        </div>
      ))}
    </>
  );
}

export default Favorites;
