import useNews from '../../hooks/useNews';
import Favorites from '../Favorites/Favorites';
import News from '../News/News';

function RenderCategory() {
  const { category } = useNews();

  switch (category) {
    case 'favoritas': return <Favorites />;

    default: return <News />;
  }
}

export default RenderCategory;
