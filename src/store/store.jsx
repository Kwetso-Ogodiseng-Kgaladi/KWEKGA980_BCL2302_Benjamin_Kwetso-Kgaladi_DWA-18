import { combineReducers, configureStore } from '@reduxjs/toolkit';
import playerReducer from './reducers/reducers'; // Update the import path if needed

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  player: playerReducer,
});

// Configure the Redux store using the configureStore function from Redux Toolkit.
const store = configureStore({
  reducer: rootReducer,
});

export default store;
