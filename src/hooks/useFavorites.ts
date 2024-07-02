/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Item } from '../types';

function useFavorites(news: Item) {
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteList = JSON.parse(localStorage.getItem('favorites') || '[]') as Item[];

  useEffect(() => {
    const favorites = favoriteList.some((item: Item) => item.id === news.id);
    setIsFavorite(favorites);
  }, [news.id]);

  function addFavorite() {
    localStorage.setItem('favorites', JSON.stringify([...favoriteList, news]));
  }

  function removeFavorite() {
    const newFavoritesList = favoriteList.filter((favorite) => favorite.id !== news.id);
    localStorage.setItem('favorites', JSON.stringify(newFavoritesList));
  }

  function updateFavoriteList() {
    const onFavoriteList = favoriteList.some((favorite: Item) => favorite.id === news.id);
    return onFavoriteList ? removeFavorite() : addFavorite();
  }

  function handleFavorite() {
    updateFavoriteList();
    setIsFavorite(!isFavorite);
  }

  return { isFavorite, handleFavorite };
}

export default useFavorites;
