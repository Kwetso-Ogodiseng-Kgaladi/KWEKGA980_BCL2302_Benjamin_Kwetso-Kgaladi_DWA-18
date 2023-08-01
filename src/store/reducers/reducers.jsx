import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedEpisode: {
    title: '',
    description: '',
    file: null,
  },
  favoriteEpisodes: [], // Set the initial value for favoriteEpisodes
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setSelectedEpisode: (state, action) => {
      state.selectedEpisode = action.payload;
    },
    addFavoriteEpisode: (state, action) => {
      state.favoriteEpisodes.push(action.payload);
    },
    removeFavoriteEpisode: (state, action) => {
      state.favoriteEpisodes = state.favoriteEpisodes.filter(
        (episode) => episode.episode !== action.payload
      );
    },
  },
});

export const {
  setSelectedEpisode,
  addFavoriteEpisode,
  removeFavoriteEpisode,
} = playerSlice.actions;

export default playerSlice.reducer;
