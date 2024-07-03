/* eslint-disable react/jsx-max-depth */
import { NewsType } from '../../types';
import './hero-card.css';
import FavoriteBtn from '../FavoriteBtn/FavoriteBtn';

function HeroCard({ news }: { news: NewsType }) {
  const { titulo,
    introducao,
    link,
    data_publicacao: dataPublicacao,
    imagens: { image_intro: imageIntro } } = news;
  return (
    <div className="card mb-3 hero-card">
      <div className="row g-0 align-items-center">
        <div className="col-md-5">
          <img
            src={ imageIntro }
            className="img-fluid rounded hero-img"
            alt="Imagem da Notícia"
          />
          <FavoriteBtn news={ news } />
        </div>
        <div className="col-md-7 hero-card-container">
          <div className="hero-card-body">
            <b className="text-danger">Notícia mais recente</b>
            <h4 className="hero-card-title">{titulo}</h4>
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
