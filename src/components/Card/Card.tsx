import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { Item } from '../../types';
import './card.css';
import useFavorites from '../../hooks/useFavorites';

function Card({ news }: { news: Item }) {
  const { titulo, link, imagens: { image_intro: imageIntro } } = news;
  const { isFavorite, handleFavorite } = useFavorites(news);

  return (
    <div className="card">
      <div>
        <img
          src={ imageIntro }
          className="card-img-top card-img"
          alt="Imagem da notícia"
        />
        <button className="favorite-btn" onClick={ handleFavorite }>
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <div className="card-body">
        <a href={ link } className="card-link news-card-text">{titulo}</a>
      </div>
    </div>
  );
}

export default Card;
