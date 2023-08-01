import { createAction } from '@reduxjs/toolkit';

// Define the shape of the payload data
export const SelectEpisode = {
  title: '', // Represents the title of the selected episode
  description: '', // Represents the description of the selected episode
};

// Create an action using the createAction function from Redux Toolkit.
// The action type is 'player/SET_SELECTED_EPISODE', and the payload is of type SelectEpisode.
export const setSelectedEpisode = createAction('player/SET_SELECTED_EPISODE');
