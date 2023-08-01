import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import MoonLoader from 'react-spinners/MoonLoader';
import { ShowFavoritePodcastStyles } from './AppStyles';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const FavoritesList = ({
  favoriteEpisodeIDs,
  toggleFavorite,
}) => {
  const [favoriteEpisodes, setFavoriteEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortFavorites, setSortFavorites] = useState();
  const [filterValue, setFilterValue] = useState('');
  const [sharedURL, setSharedURL] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchFavoriteEpisodes = async () => {
      try {
        const episodes = [];

        for (const episodeKey of favoriteEpisodeIDs) {
          if (typeof episodeKey !== 'string') {
            continue;
          }

          const [showID, seasonID, episodeID] = episodeKey.split('-');
          const response = await fetch(
            `https://podcast-api.netlify.app/id/${showID}`
          );
          const data = await response.json();
          const seasonData = data.seasons.find(
            (season) => season.season === parseInt(seasonID)
          );
          const episodeObject = {
            key: episodeKey,
            show: data,
            season: seasonData,
            episode: seasonData.episodes.find(
              (episode) => episode.episode === Number(episodeID)
            ),
          };
          episodes.push(episodeObject);
        }

        setFavoriteEpisodes(episodes);
      } catch (error) {
        console.error('Something went wrong. Please try again.', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteEpisodes();
  }, [favoriteEpisodeIDs]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'd MMMM, yyyy');
  };

  const applySorting = (sortType) => {
    const sortedEpisodes = [...favoriteEpisodes];

    const sortOptions = {
      titleAsc: (a, b) => a.episode.title.localeCompare(b.episode.title),
      titleDes: (a, b) => b.episode.title.localeCompare(a.episode.title),
      recent: (a, b) =>
        new Date(b.show.updated).getTime() - new Date(a.show.updated).getTime(),
      leastRecent: (a, b) =>
        new Date(a.show.updated).getTime() - new Date(b.show.updated).getTime(),
    };

    if (sortType) {
      sortedEpisodes.sort(sortOptions[sortType]);
    }

    setFavoriteEpisodes(sortedEpisodes);
  };

  const handleSortAZ = () => {
    setSortFavorites((prevSortType) =>
      prevSortType === 'titleAsc' ? 'titleDes' : 'titleAsc'
    );
  };

  const handleSortRecent = () => {
    setSortFavorites((prevSortType) =>
      prevSortType === 'recent' ? 'leastRecent' : 'recent'
    );
  };

  const handleSearch = (e) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    applySorting(sortFavorites);
  }, [sortFavorites]);

  const filteredEpisodes = favoriteEpisodes.filter((episode) =>
    episode.episode.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleEpisodeClick = (
    showId,
    seasonId,
    episodeId
  ) => {
    navigate(`/episode/${showId}/${seasonId}/${episodeId}`);
  };

  const handleToggleFavorite = (episode, season, show) => {
    toggleFavorite(episode, season, show);
    const currentDate = new Date();
    const formattedDate = formatDate(currentDate);

    const updatedEpisodes = favoriteEpisodes.map((ep) => {
      if (ep.key === episode.key) {
        return {
          ...ep,
          addedOn: formattedDate,
        };
      }
      return ep;
    });

    setFavoriteEpisodes(updatedEpisodes);
  };

  const handleShareEpisode = (episode) => {
    const { key } = episode;
    const sharedURL = `https://example.com/episodes/${key}`;
    setSharedURL(sharedURL);
    // Logic for copying the URL to the clipboard
    // You can use a library like `clipboard-copy` or implement it manually
  };

  return (
    <ShowFavoritePodcastStyles>
      <div className="form-container">
        <Button
          onClick={handleSortAZ}
          className={sortFavorites === 'titleAsc' ? 'active' : ''}
        >
          {sortFavorites === 'titleAsc' ? 'Sort Z-A' : 'Sort A-Z'}
        </Button>
        <Button
          onClick={handleSortRecent}
          className={sortFavorites === 'recent' ? 'active' : ''}
        >
          {sortFavorites === 'recent'
            ? 'Sort by Least Recent'
            : 'Sort by Recent'}
        </Button>
        <input
          type="text"
          placeholder="Search episodes"
          value={filterValue}
          onChange={handleSearch}
        />
      </div>

      {loading ? (
        <div className="loading">
          <MoonLoader color="black" loading={loading} size={40} />
        </div>
      ) : (
        <Carousel>
          {filteredEpisodes.map((episode) => (
            <div className="show-list" key={episode.key}>
              <div
                onClick={() =>
                  handleEpisodeClick(
                    episode.show.id,
                    episode.season.season,
                    episode.episode.episode
                  )
                }
              >
                <div>
                  <img src={episode.show.thumbnail} alt={episode.show.title} />
                </div>

                <div>
                  <h3>{episode.episode.title}</h3>
                  <p>{episode.show.title}</p>
                  <p>
                    Season {episode.season.season} - Episode{' '}
                    {episode.episode.episode}
                  </p>
                  <p>{formatDate(episode.show.updated)}</p>
                  <p>
                    <p>
                      Added on:{' '}
                      {episode.addedOn
                        ? `${formatDate(episode.addedOn)} - ${format(
                            new Date(episode.addedOn),
                            'hh:mm:ss a'
                          )}`
                        : 'Not available'}
                    </p>
                  </p>
                </div>
              </div>
              <div
                className="favorite-icon"
                onClick={() =>
                  handleToggleFavorite(
                    episode.episode,
                    episode.season,
                    episode.show
                  )
                }
              >
                <AiFillHeart size={24} color="#e74c3c" />
              </div>
              <img
                className="single-show-image"
                src={episode.show.image}
                alt={episode.show.title}
              />
            </div>
          ))}
        </Carousel>
      )}

      {sharedURL && (
        <div>
          <p>Share this episode:</p>
          <input type="text" value={sharedURL} readOnly />
          <Button onClick={() => handleShareEpisode(favoriteEpisodes[0])}>
            Copy URL
          </Button>
        </div>
      )}
    </ShowFavoritePodcastStyles>
  );
};

export default FavoritesList;
