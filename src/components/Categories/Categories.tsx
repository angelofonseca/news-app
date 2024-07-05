import useNews from '../../hooks/useNews';
import './categories.css';

function Categories() {
  const { category, handleCategory } = useNews();

  return (
    <div className="d-flex gap-3">
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
        className={ `categories-btn me-3 ${category === 'favoritas' ? 'selected' : ''}` }
        onClick={ () => handleCategory('favoritas') }
      >
        Favoritas
      </button>
    </div>
  );
}

export default Categories;
