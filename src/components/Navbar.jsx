import React from 'react';
import { NavbarStyles } from './AppStyles';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  // useNavigate hook from react-router-dom to navigate between routes
  const navigate = useNavigate();

  const handleFavoritesClick = () => {
    // Navigate to the "/favorites" route when the Favorites button is clicked
    navigate('/favorites');
  };

  const handleGoHome = () => {
    // Navigate to the default route ("/") when the logo is clicked
    navigate('/');
  };

  return (
    <NavbarStyles>
      <div className="navbar-container">
        <img
          className="navbar-logo"
          src="https://marketplace.canva.com/EAE4l8bNqKk/2/0/1600w/canva-yellow-simple-monoline-podcast-logo-0D4iJscwJ0Y.jpg"
          alt="Godi"
          onClick={handleGoHome}
        />
        <Button variant="yellow" onClick={handleFavoritesClick}>
          Favorites
        </Button>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
