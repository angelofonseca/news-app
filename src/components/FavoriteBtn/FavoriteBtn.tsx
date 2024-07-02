import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useFavorites from '../../hooks/useFavorites';
import { NewsType } from '../../types';

function FavoriteBtn({ news }: { news: NewsType }) {
  const { isFavorite, handleFavorite } = useFavorites(news);

  return (
    <button className="favorite-btn" onClick={ handleFavorite }>
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}

export default FavoriteBtn;
