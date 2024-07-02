/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { NewsType } from '../types';

function useFavorites(news: NewsType) {
  const { id } = news;
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteList = JSON.parse(localStorage
    .getItem('favorites') || '[]') as NewsType[];

  useEffect(() => {
    const favorites = favoriteList.some((favorite) => favorite.id === id);
    setIsFavorite(favorites);
  }, []);

  function addFavorite() {
    localStorage.setItem('favorites', JSON.stringify([...favoriteList, news]));
  }

  function removeFavorite() {
    const newFavoritesList = favoriteList.filter((favorite) => favorite.id !== id);
    localStorage.setItem('favorites', JSON.stringify(newFavoritesList));
  }

  function updateFavoriteList() {
    const onFavoriteList = favoriteList.some((favorite) => favorite.id === id);
    return onFavoriteList ? removeFavorite() : addFavorite();
  }

  function handleFavorite() {
    updateFavoriteList();
    setIsFavorite(!isFavorite);
  }

  return { isFavorite, handleFavorite };
}

export default useFavorites;
