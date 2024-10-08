/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import useFavorite from '../../hooks/useFavorites';
import { NewsType } from '../../types';
import './favorites.css';

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
    <section className={ `${favorites.length > 0 && 'favorites-section row row-cols-1 row-cols-md-3 g-4 justify-content-center'}` }>
      {favorites.length > 0
        ? (favorites.map((news) => (
          <div className="col news-card" key={ news.id }>
            <Card news={ news } />
          </div>
        )))
        : (
          <h2 className="favorites-section">Não há notícias favoritadas...</h2>
        )}
    </section>
  );
}

export default Favorites;
