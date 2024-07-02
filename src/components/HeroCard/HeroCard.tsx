import { Item } from '../../types';
import './hero-card.css';

function HeroCard({ news }: { news: Item }) {
  const { imagens, titulo, introducao, link, data_publicacao: dataPublicacao } = news;
  const { image_intro: imagemIntro } = imagens;
  return (
    <div className="card mb-3 hero-card">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={ imagemIntro }
            className="img-fluid rounded hero-img"
            alt="..."
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <small className="text-body-secondary">{dataPublicacao}</small>
            <p className="card-text">{introducao}</p>
            <a className="btn btn-primary btn-sm" href={ link }>Link da Notícia</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
