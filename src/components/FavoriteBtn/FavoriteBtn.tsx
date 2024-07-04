import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { NewsType } from '../../types';
import './favorite-btn.css';
import useFavorite from '../../hooks/useFavorite';

function FavoriteBtn({ news }: { news: NewsType }) {
  const { isFavorite, handleFavorite } = useFavorite(news);

  return (
    <button className="favorite-btn" onClick={ handleFavorite }>
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}

export default FavoriteBtn;
