/* eslint-disable react/jsx-max-depth */
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useFavorites from '../../hooks/useFavorites';
import { Item } from '../../types';
import './hero-card.css';

function HeroCard({ news }: { news: Item }) {
  const { titulo,
    introducao,
    link,
    data_publicacao: dataPublicacao,
    imagens: { image_intro: imageIntro } } = news;
  const { isFavorite, handleFavorite } = useFavorites(news);
  return (
    <div className="card mb-3 hero-card">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={ imageIntro }
            className="img-fluid rounded hero-img"
            alt="Imagem da Notícia"
          />
          <button className="favorite-btn" onClick={ handleFavorite }>
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
        <div className="col-md-7 hero-card-container">
          <div className="hero-card-body">
            <h5 className="hero-card-title">{titulo}</h5>
            <small className="text-body-secondary">{dataPublicacao}</small>
            <p className="hero-card-text">{introducao}</p>
            <div className="d-flex justify-content-between">
              <a className="btn btn-primary btn-sm" href={ link }>Link da Notícia</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
