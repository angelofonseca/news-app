/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { NewsType } from '../types';

function useFavorite(news: NewsType) {
  const { id } = news;
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavoritesList().some((favorite) => favorite.id === id);
    setIsFavorite(favorites);
  }, [id]);

  function getFavoritesList() {
    return JSON.parse(localStorage.getItem('favorites') || '[]') as NewsType[];
  }

  function addFavorite() {
    const updatedFavoritesList = [...getFavoritesList(), news];
    localStorage.setItem('favorites', JSON.stringify(updatedFavoritesList));
  }

  function removeFavorite() {
    const updatedFavoritesList = getFavoritesList()
      .filter((favorite) => favorite.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavoritesList));
  }

  function updateFavoriteList() {
    const onFavoriteList = getFavoritesList().some((favorite) => favorite.id === id);
    return onFavoriteList ? removeFavorite() : addFavorite();
  }

  function handleFavorite() {
    updateFavoriteList();
    setIsFavorite(!isFavorite);
  }

  return { isFavorite, handleFavorite, getFavoritesList };
}

export default useFavorite;
