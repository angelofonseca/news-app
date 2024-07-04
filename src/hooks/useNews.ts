import { useContext } from 'react';
import NewsContext from '../context/NewsContext';

function useNews() {
  const context = useContext(NewsContext);

  if (context === null) {
    throw new Error('Context necessita do Provider');
  }
  return { ...context };
}

export default useNews;
