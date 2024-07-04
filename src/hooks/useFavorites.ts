/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { NewsType } from '../types';

function useFavorites() {
  const [isFavorite, setIsFavorite] = useState(false);

  function getFavoritesList() {
    return JSON.parse(localStorage.getItem('favorites') || '[]') as NewsType[];
  }

  function addFavorite(news: NewsType) {
    const updatedFavoritesList = [...getFavoritesList(), news];
    localStorage.setItem('favorites', JSON.stringify(updatedFavoritesList));
  }

  function removeFavorite({ id }: NewsType) {
    const updatedFavoritesList = getFavoritesList()
      .filter((favorite) => favorite.id !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavoritesList));
    window.dispatchEvent(new CustomEvent('favoriteRemoved'));
  }

  function updateFavoritesList(news: NewsType) {
    const onFavoriteList = getFavoritesList().some((favorite) => favorite.id === news.id);
    return onFavoriteList ? removeFavorite(news) : addFavorite(news);
  }

  function handleFavorite(news: NewsType) {
    updateFavoritesList(news);
    setIsFavorite(!isFavorite);
  }

  return { handleFavorite, getFavoritesList };
}

export default useFavorites;
