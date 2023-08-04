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
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/04/attachment_82147568-e1492537983742.jpg?auto=format&q=60&fit=max&w=930"
          alt="Godi"
          onClick={handleGoHome}
        />
        <Button variant="blue" onClick={handleFavoritesClick}>
          Favorites
        </Button>
      </div>
    </NavbarStyles>
  );
};

export default Navbar;
