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
import React, { useEffect, useState } from 'react';
//import { StyleSheetManager } from 'styled-components';
import { supabase } from './components/Supabase';
import Supa from './components/Supabase';


const App = () => {
  const [signUpState, setSignUpState] = useState('SignPhase')
  //const [signOutstate, setSignOutState] = useState('signOutPhase')
  // Retrieve favoriteEpisodes and toggleFavorite from the useFavoriteEpisodes hook
  const { favoriteEpisodes, toggleFavorite } = useFavoriteEpisodes();

  React.useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        console.log("User signed in successfully:", session.user.email);
        setSignUpState('startPhase')
      } else if (event === "SIGNED_OUT") {
        // User signed out
        console.log("User signed out");
        setSignUpState(false);
      }

    });

    return () => {
      authListener.unsubscribe;
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      // The "SIGNED_OUT" event will trigger the useEffect and setIsLoggedIn(false)
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  }; 

  const[fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)


useEffect(() => {
const fetcchSmoothies = async () => {
  const { data, error } = await supabase
  .from('podcast')
  .select()

    if (error) {
      setFetchError('Could not fetch the smoothies')
      setSmoothies(null)
      console.log(error)
    }
if (data) {
  setSmoothies(data)
  setFetchError(null)
}

}

fetcchSmoothies()

}, [])



  return (

    //<StyleSheetManager shouldForwardProp={(prop) => !prop.startsWith('variant')}>
      
    <AppStyles>
      {signUpState === 'SignPhase' && <Supa />}

      {signUpState === 'startPhase' && <div className="app">

        {/* {fetchError && (<p>{fetchError}</p>)}
        {smoothies && (
          <div classname="smoothies">
            {smoothies.map(smoothies => (
            <>
              <p>{smoothies.title}</p>
              <p>{smoothies.description}</p>
              <p>{smoothies.episode}</p>
              
              </>
            ))}
            </div>
        )} */}

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
   
//</StyleSheetManager>
  );
};

export default App;
