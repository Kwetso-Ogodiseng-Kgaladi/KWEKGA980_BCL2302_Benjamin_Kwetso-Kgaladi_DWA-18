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
          src="https://www.canva.com/design/DAFqS5tMqPY/F5B2x2AG8t_UWDt50vSIcg/edit?utm_content=DAFqS5tMqPY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
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
