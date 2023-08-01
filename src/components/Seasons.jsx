import React from 'react';
import { SeasonsStyles } from './AppStyles';

const Seasons = ({ seasons, selectedSeason, onSelectSeason }) => {
  // Handle the change of selected season
  const handleSeasonChange = (event) => {
    const season = parseInt(event.target.value);
    onSelectSeason(season);
  };

  return (
    <SeasonsStyles>
      <label htmlFor="season-select">Select Season:</label>
      <select
        id="season-select"
        value={selectedSeason}
        onChange={handleSeasonChange}
      >
        {/* Generate options for each season */}
        {seasons.map((season) => (
          <option key={season.season} value={season.season}>
            {season.title}
          </option>
        ))}
      </select>
    </SeasonsStyles>
  );
};

export default Seasons;
