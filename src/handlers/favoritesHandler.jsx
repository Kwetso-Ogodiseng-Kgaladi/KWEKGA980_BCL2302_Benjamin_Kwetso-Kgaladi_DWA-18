import { useState } from 'react';

export const useFavoriteEpisodes = () => {
  const storingFavorites = () => {
    const storedFavorites = localStorage.getItem('favoriteEpisodes');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };

  const [favoriteEpisodes, setFavoriteEpisodes] = useState(storingFavorites());

  const toggleFavorite = (episode, season, show) => {
    const compositeKey = `${show.id}-${season.season}-${episode.episode}`;

    if (favoriteEpisodes.some((favEpisodeKey) => favEpisodeKey === compositeKey)) {
      removeFavorite(compositeKey);
    } else {
      addFavorite(compositeKey);
    }

    console.log(favoriteEpisodes);
  };

  const addFavorite = (compositeKey) => {
    const updatedFavorites = [...favoriteEpisodes, compositeKey];
    setFavoriteEpisodes(updatedFavorites);
    localStorage.setItem('favoriteEpisodes', JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (compositeKey) => {
    const updatedFavorites = favoriteEpisodes.filter(
      (favEpisodeKey) => favEpisodeKey !== compositeKey
    );
    setFavoriteEpisodes(updatedFavorites);
    localStorage.setItem('favoriteEpisodes', JSON.stringify(updatedFavorites));
  };

  return {
    favoriteEpisodes,
    toggleFavorite,
    addFavorite,
    removeFavorite,
  };
};
