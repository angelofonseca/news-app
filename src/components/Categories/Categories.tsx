import useNews from '../../hooks/useNews';
import './categories.css';

function Categories() {
  const { setCategorie } = useNews();
  return (
    <div className="d-flex justify-content-center categories-container p-4">
      <button
        className="categories-btn"
        onClick={ () => setCategorie('recentes') }
      >
        Mais Recentes
      </button>
      <button
        className="categories-btn"
        onClick={ () => setCategorie('release') }
      >
        Release
      </button>
      <button
        className="categories-btn"
        onClick={ () => setCategorie('noticia') }
      >
        Notícia
      </button>
      <button
        className="categories-btn"
        onClick={ () => setCategorie('favoritas') }
      >
        Favoritas
      </button>
    </div>
  );
}

export default Categories;
