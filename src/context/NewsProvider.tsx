import React, { useEffect, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import NewsContext from './NewsContext';
import { CategoriesType } from '../types';
import fetchNews from '../services/fetchNews';

function NewsProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<CategoriesType>('recentes');

  const {
    data: newsData,
    fetchNextPage,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['newsData', category],
    queryFn: ({ pageParam = 1 }) => fetchNews(pageParam, category),
    getNextPageParam: (lastPage) => lastPage?.nextPage,
  });

  useEffect(() => {
    const getCategory = localStorage.getItem('category');
    if (!getCategory) return localStorage.setItem('category', JSON.stringify(category));
    setCategory(JSON.parse(getCategory));
  }, []);

  function handleCategory(param: CategoriesType) {
    setCategory(param);
    localStorage.setItem('category', JSON.stringify(param));
  }

  const value = {
    newsData,
    isFetchingNextPage,
    isLoading,
    category,
    setCategory,
    fetchNextPage,
    handleCategory,
  };

  return (
    <NewsContext.Provider value={ value }>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;
