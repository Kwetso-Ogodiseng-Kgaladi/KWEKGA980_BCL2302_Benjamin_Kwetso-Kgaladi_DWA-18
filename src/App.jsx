import { Provider } from 'react-redux';
import { supabase } from './client';
import store from './store/store';
import Navbar from './components/Navbar';
import { AppStyles } from './components/AppStyles';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultList from './components/DefaultList';
import FavoritesList from './components/FavoritesList';
import { useFavoriteEpisodes } from './handlers/favoritesHandler.Jsx';
import React, { useState } from 'react';

const App = () => {
  // Retrieve favoriteEpisodes and toggleFavorite from the useFavoriteEpisodes hook
  const { favoriteEpisodes, toggleFavorite } = useFavoriteEpisodes();

  const { formData, setformData } = useState({
    fullname: '', email: '', password: ''
  })

console.log(formData)

  function handleChange(event){
    setformData{(prevformData) => {
        return {
          ...prevformData,
          [event.target.name]:event.target.value
    }
    }

    }
  }
  return (
    <AppStyles>

      <div>
        <form   onSubmit={handleSubmit}>
          <input
            placeholder='Fullname'
            name='fullname'
            onChange={handleChange}
          />
          <input
            placeholder='Email'
            name='email'
            onChange={handleChange}
          />
          <input
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />

          <button type='Submit' />
        </form>
      </div>








      <div className="app">
        <Router>
          <Provider store={store}>
            <AppStyles>
              <Navbar />
              <div className="content">
                <Routes>
                  {/* Render FavoritesList component when the path is "/favorites" */}
                  <Route
                    path="/favorites"
                    element={
                      <FavoritesList
                        favoriteEpisodeIDs={favoriteEpisodes}
                        toggleFavorite={toggleFavorite}
                      />
                    }
                  />
                  {/* Render DefaultList component for the default path "/" */}
                  <Route path="/" element={<DefaultList />} />
                </Routes>
              </div>
              <Footer />
            </AppStyles>
          </Provider>
        </Router>
      </div>
    </AppStyles>
  );
};

export default App;
