import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import MoonLoader from 'react-spinners/MoonLoader';
import { PodcastPlayerStyles } from './AppStyles';

const PodcastPlayer = () => {
  const selectedEpisode = useSelector(
    (state) => state.player.selectedEpisode
  );

  const audioRef = useRef(null);

  useEffect(() => {
    if (selectedEpisode) {
      const { file } = selectedEpisode;
      if (file) {
        const fileURL = URL.createObjectURL(file);
        audioRef.current.src = fileURL;
        audioRef.current.play();
      }
    }
  }, [selectedEpisode]);

  if (!selectedEpisode) {
    return (
      <div className="audio-loader">
        <div className="audio">
          <MoonLoader color="" loading={true} size={60} />
        </div>
      </div>
    );
  }

  return (
    <PodcastPlayerStyles>
      <div className="audio">
        <h2>{selectedEpisode.title}</h2>
        <p>{selectedEpisode.description}</p>
        <audio id="audioPlayer" ref={audioRef} controls />
      </div>
    </PodcastPlayerStyles>
  );
};

export default PodcastPlayer;
