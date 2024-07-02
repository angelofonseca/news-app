import { NewsType } from '../../types';
import './card.css';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';

function Card({ news }: { news: NewsType }) {
  const { titulo, link, imagens: { image_intro: imageIntro } } = news;

  return (
    <div className="card">
      <div>
        <img
          src={ imageIntro }
          className="card-img-top card-img"
          alt="Imagem da notícia"
        />
        <FavoriteBtn news={ news } />
      </div>
      <div className="card-body">
        <a href={ link } className="card-link news-card-text">{titulo}</a>
      </div>
    </div>
  );
}

export default Card;
