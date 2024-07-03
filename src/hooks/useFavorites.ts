/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { NewsType } from '../types';

function useFavorites(news: NewsType) {
  const { id } = news;
  const [isFavorite, setIsFavorite] = useState(false);
  const favoritesList = JSON.parse(localStorage
    .getItem('favorites') || '[]') as NewsType[];

  useEffect(() => {
    const favorites = favoritesList.some((favorite) => favorite.id === id);
    setIsFavorite(favorites);
  }, []);

  function addFavorite() {
    localStorage.setItem('favorites', JSON.stringify([...favoritesList, news]));
  }

  function removeFavorite() {
    const newFavoritesList = favoritesList.filter((favorite) => favorite.id !== id);
    localStorage.setItem('favorites', JSON.stringify(newFavoritesList));
  }

  function updateFavoriteList() {
    const onFavoriteList = favoritesList.some((favorite) => favorite.id === id);
    return onFavoriteList ? removeFavorite() : addFavorite();
  }

  function handleFavorite() {
    updateFavoriteList();
    setIsFavorite(!isFavorite);
  }

  return { isFavorite, handleFavorite };
}

export default useFavorites;
