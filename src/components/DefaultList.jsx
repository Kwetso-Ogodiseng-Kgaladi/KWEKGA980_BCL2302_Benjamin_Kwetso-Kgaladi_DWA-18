import React, { useState } from 'react';
import SinglePodcast from './SinglePodcast';
import PodcastList from './PodcastList';
import { useFavoriteEpisodes } from '../handlers/favoritesHandler.Jsx';

const DefaultList = () => {
  // State to keep track of the selected podcast ID
  const [selectedPodcastId, setSelectedPodcastId] = useState(null);

  // Custom hook to handle favorite episodes
  const { toggleFavorite, favoriteEpisodes } = useFavoriteEpisodes();

  // Handle the click event when a show is selected
  const handleShowClick = (showId) => {
    setSelectedPodcastId(showId);
  };

  // Handle the go back event when returning from the single podcast view
  const handleGoBack = () => {
    setSelectedPodcastId(null);
  };

  // Handle the toggle favorite event for an episode
  const handleToggleFavorite = (
    episode,
    selectedSeasonData,
    showData
  ) => {
    if (selectedSeasonData !== null) {
      toggleFavorite(episode, selectedSeasonData, showData);
    }
  };

  return (
    <div>
      {selectedPodcastId ? (
        // Render the SinglePodcast component when a podcast is selected
        <SinglePodcast
          toggleFavorite={handleToggleFavorite}
          show={selectedPodcastId}
          goBack={handleGoBack}
          favoriteEpisodes={favoriteEpisodes} // Pass the favoriteEpisodes to the SinglePodcast component
        />
      ) : (
        // Render the PodcastList component when no podcast is selected
        <PodcastList onShowClick={handleShowClick} />
      )}
    </div>
  );
};

export default DefaultList;
