import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { NewsType } from '../../types';
import './favorite-btn.css';
import useFavorite from '../../hooks/useFavorites';

function FavoriteBtn({ news }: { news: NewsType }) {
  const { handleFavorite, getFavoritesList } = useFavorite();
  const isFavorite = getFavoritesList().some((favorite) => favorite.id === news.id);

  return (
    <button className="favorite-btn" onClick={ () => handleFavorite(news) }>
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}

export default FavoriteBtn;
