import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import useFavorite from '../../hooks/useFavorites';
import { NewsType } from '../../types';

function Favorites() {
  const { getFavoritesList } = useFavorite();
  const [favorites, setFavorites] = useState<NewsType[]>([]);

  useEffect(() => {
    const updateFavorites = () => {
      setFavorites(getFavoritesList());
    };

    updateFavorites();

    window.addEventListener('favoriteRemoved', updateFavorites);

    return () => window.removeEventListener('favoriteRemoved', updateFavorites);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
