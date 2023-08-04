import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MoonLoader from 'react-spinners/MoonLoader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Seasons from './Seasons';
import { supabase } from './Supabase';


import Button from './Button';
import { SinglePodcastStyles } from './AppStyles';
import { setSelectedEpisode } from '../store/actions/actions';
import PodcastPlayer from './PodCastPlayer';

const SinglePodcast = ({
  show,
  goBack,
  toggleFavorite,
  favoriteEpisodes,
}) => {
  const [showData, setShowData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSeason, setSelectedSeason] = useState(1);
  const [selectedSeasonData, setSelectedSeasonData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await fetch(
          `https://podcast-api.netlify.app/id/${show}`
        );
        const data = await response.json();
        setShowData(data);
        setLoading(false);
      } catch (error) {
        console.error('Something went wrong. Please try again.', error);
      }
    };

    fetchShowDetails();
  }, [show]);

  useEffect(() => {
    if (showData) {
      const seasonData = showData.seasons.find(
        (season) => season.season === selectedSeason
      );
      setSelectedSeasonData(seasonData || null);
    }
  }, [selectedSeason, showData]);

  const handleSelectSeason = (seasonNumber) => {
    setSelectedSeason(seasonNumber);
    if (showData) {
      const seasonData = showData.seasons.find(
        (season) => season.season === seasonNumber
      );
      setSelectedSeasonData(seasonData ? { ...seasonData } : null);
    }
  };

  const handlePlayEpisode = (episode) => {
    const { seasons } = showData;
    let selectedEpisode;

    for (const season of seasons) {
      selectedEpisode = season.episodes.find(
        (ep) => ep.episode === episode.episode
      );

      if (selectedEpisode) {
        break;
      }
    }

    if (selectedEpisode) {
      const { file } = selectedEpisode;
      const audioPlayer = document.getElementById('audioPlayer');
      audioPlayer.src = file;
      audioPlayer.play();
      dispatch(setSelectedEpisode(selectedEpisode));
    }
  };

  const episodeIsFavorited = (episode) => {
    if (selectedSeasonData && showData) {
      const compositeKey = `${showData.id}-${selectedSeasonData.season}-${episode.episode}`;
      return favoriteEpisodes.includes(compositeKey);
    }
    return false;
  };

  if (!showData) {
    return (
      <div className="loading-spinner">
        <MoonLoader color="black" loading={loading} size={60} />
      </div>
    );
  }

  const { title, description, seasons } = showData;
  const selectedSeasonImage =
    seasons.find((season) => season.season === selectedSeason)?.image ||
    showData.image ||
    '';

  return (
    <SinglePodcastStyles>
      <Button variant="primary" className="go-back-btn" onClick={goBack}>
        Go Back
      </Button>
      {showData && (
        <div>
          <h3 className="show-title">{title}</h3>
          <img
            className="single-show-image"
            src={selectedSeasonImage}
            alt={title}
          />
          <p className="show-description">{description}</p>

          <Seasons
            seasons={seasons}
            selectedSeason={selectedSeason}
            onSelectSeason={handleSelectSeason}
          />

          {selectedSeasonData && (
            <>
              <h4 className="selected-season-title">
                {selectedSeasonData.title}
              </h4>
              <p className="season-episodes">
                Episodes: {selectedSeasonData.episodes.length}
              </p>
              <ul className="episode-list">
                {selectedSeasonData.episodes.map((episode) => (
                  <li key={episode.episode} className="episode-item">
                    <span className="episode-number-pill">
                      EPISODE: {episode.episode}
                    </span>
                    <h5 className="episode-title">{episode.title}</h5>
                    {episodeIsFavorited(episode) ? (
                      <AiFillHeart
                        className="favourite-icon"
                        onClick={() =>
                          {

                          toggleFavorite(episode, selectedSeasonData, showData)
                            
                            const rite= async () => {
                            
                              const { data, error } = await supabase
                                .from('podcast')
                                .insert({
                                  title: episode.title,
                                 description: episode.description, 
                                episode: episode.episode,
                                audio: episode.file
                                })
                            }
                            rite()
                          }
                        }
                      />
                    ) : (
                      <AiOutlineHeart
                        className="favorite-icon"
                        onClick={() =>
                          toggleFavorite(episode, selectedSeasonData, showData)
                        }
                      />
                    )}
                    <p className="episode-description">{episode.description}</p>
                    <Button
                      className="play-button"
                      onClick={() => handlePlayEpisode(episode)}
                      variant="third"
                    >
                      <FontAwesomeIcon icon={faPlay} />
                    </Button>
                  </li>
                ))}
              </ul>
              <PodcastPlayer />
            </>
          )}
        </div>
      )}
    </SinglePodcastStyles>
  );
};

export default SinglePodcast;
