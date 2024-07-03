import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import NewsContext from './NewsContext';
import { CategoriesType } from '../types';
import fetchNews from '../services/fetchNews';

function NewsProvider({ children }: { children: React.ReactNode }) {
  const [categorie, setCategorie] = useState<CategoriesType>('noticia');

  const {
    data: newsData,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['newsData'],
    queryFn: ({ pageParam = 1 }) => fetchNews(pageParam),
    getNextPageParam: (lastPage) => lastPage?.nextPage,
  });

  const value = {
    newsData,
    isFetchingNextPage,
    isLoading,
    categorie,
    setCategorie,
    fetchNextPage,
  };

  return (
    <NewsContext.Provider value={ value }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
