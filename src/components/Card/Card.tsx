import { NewsType } from '../../types';
import './card.css';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';
import formatDate from '../../utils/formatDate';

function Card({ news }: { news: NewsType }) {
  const { titulo,
    data_publicacao: dataPublicacao,
    link,
    imagens: { image_intro: imageIntro },
  } = news;

  const date = formatDate(dataPublicacao);

  return (
    <div className="card">
      <div>
        <a href={ link }>
          <img
            src={ imageIntro }
            className="card-img-top card-img"
            alt="Imagem da notícia"
          />
        </a>
        <FavoriteBtn news={ news } />
      </div>
      <small className="text-body-secondary news-card-date">{date}</small>
      <div className="card-body p-0 mt-2">
        <a
          href={ link }
          className="card-link news-card-text"
        >
          {titulo}
        </a>
      </div>
    </div>
  );
}

export default Card;
