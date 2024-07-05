import useNews from '../../hooks/useNews';
import './categories.css';

function Categories() {
  const { category, handleCategory } = useNews();

  return (
    <div className="d-flex justify-content-around categories-container pb-3 pt-4">
      <button
        className={ `categories-btn ${category === 'recentes' ? 'selected' : ''}` }
        name="recentes"
        onClick={ () => handleCategory('recentes') }
      >
        Mais Recentes
      </button>
      <button
        className={ `categories-btn ${category === 'release' ? 'selected' : ''}` }
        onClick={ () => handleCategory('release') }
      >
        Release
      </button>
      <button
        className={ `categories-btn ${category === 'noticia' ? 'selected' : ''}` }
        onClick={ () => handleCategory('noticia') }
      >
        Notícia
      </button>
      <button
        className={ `categories-btn ${category === 'favoritas' ? 'selected' : ''}` }
        onClick={ () => handleCategory('favoritas') }
      >
        Favoritas
      </button>
    </div>
  );
}

export default Categories;
