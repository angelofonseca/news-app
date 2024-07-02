import { Item } from '../../types';
import './card.css';

function Card({ news }: { news: Item }) {
  const { imagens, titulo } = news;
  const { image_intro: imagemIntro } = imagens;
  return (
    <div className="card ">
      <img src={ imagemIntro } className="card-img-top card-img" alt="..." />
      <div className="card-body">
        <b className="card-text news-card-text">{titulo}</b>
      </div>
    </div>
  );
}

export default Card;
