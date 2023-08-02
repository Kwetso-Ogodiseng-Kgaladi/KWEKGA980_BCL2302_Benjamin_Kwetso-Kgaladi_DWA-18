import { Provider } from 'react-redux';
//import { supabase } from './client';
import store from './store/store';
import Navbar from './components/Navbar';
import { AppStyles } from './components/AppStyles';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultList from './components/DefaultList';
import FavoritesList from './components/FavoritesList';
import { useFavoriteEpisodes } from './handlers/favoritesHandler.Jsx';
import React, { useState } from 'react';
import { supabase } from './components/Supabase ';
import Supa from './components/Supabase';


const App = () => {
const [signUpState, setSignUpState] = useState('SignPhase')

  // Retrieve favoriteEpisodes and toggleFavorite from the useFavoriteEpisodes hook
  const { favoriteEpisodes, toggleFavorite } = useFavoriteEpisodes();

  React.useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        console.log("User signed in successfully:", session.user.email);
        setSignUpState('startPhase')
      }
    });

    return () => {
      authListener.unsubscribe;
    };
  }, []);


  return (
    <AppStyles>
      {signUpState ==='SignPhase' && <Supa />}

      { signUpState ==='startPhase' && <div className="app">
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
      }
    </AppStyles>
  );
};

export default App;
