import { styled } from 'styled-components';
export const AppStyles = styled.div`
  .loading-spinner {
    display: flex; // Display the loading spinner as a flex container
    justify-content: center; // Center child elements horizontally
    align-items: center; // Center child elements vertically
    height: 90vh; // Set the height of the loading spinner container to 90% of the viewport height
  }
  .content {
    margin: auto;
    max-width: 1280px;
    flex: auto;
  }
`;

export const NavbarStyles = styled.nav`
  background-color: #B30A85; // Set the background color for the navbar
  padding: 5px 0; // Apply padding to the navbar
  box-shadow: #31c48d; // Apply a box shadow to the navbar
  width: 100%; // Set the width of the navbar

  h2 {
    color: white; // Set the text color for h2 elements within the navbar
  }

  h2 span {
    color: yellow; // Set the text color for spans within h2 elements in the navbar
  }

  .navbar-container {
    display: flex; // Display the navbar container as a flex container
    justify-content: space-between; // Position child elements with space between them horizontally
    align-items: center; // Center child elements vertically
    max-width: 1280px; // Set the maximum width of the navbar container
    margin: 0 auto; // Center the navbar container horizontally
    padding: 0 2rem; // Apply padding to the navbar container
  }

  .navbar-logo {
    height: 90px; // Set the height of the navbar logo
    border-radius: 100%; // Apply a circular border radius to the navbar logo
    cursor: pointer; // Set the cursor to pointer for the navbar logo
  }
`;

export const ShowPodcastStyles = styled.div`
  /* ShowList Display */

  .show-list-container {
    margin: 20px; // Apply margin to the show list container
    display: flex; // Display the show list container as a flex container
    flex-direction: column; // Arrange child elements vertically
    align-items: center; // Center child elements horizontally
    min-height: calc(
      100vh - 20px
    ); // Set the minimum height of the show list container
  }

  .show-list {
    display: grid; // Display the show list as a grid
    grid-template-columns: repeat(
      auto-fill,
      minmax(200px, 1fr)
    ); // Define the grid columns with auto-fill and a minimum width of 200px
  }

  .show-card {
    display: flex; // Display the show card as a flex container
    flex-direction: column; // Arrange child elements vertically

    border: 1px solid #f5f5f5; // Apply a border to the show card
    border-radius: 5px; // Apply border radius to the show card
    padding: 10px; // Apply padding to the show card

    max-width: 200px; // Set the maximum width of the show card
  }

  .show-image {
    width: 100%; // Set the width of the show image to 100%
    aspect-ratio: 1/1; // Set the aspect ratio of the show image
    border-radius: 8px; // Apply border radius to the show image
    margin-bottom: 10px; // Apply bottom margin to the show image
    cursor: pointer; // Set the cursor to pointer for the show image
  }

  .show-title {
    font-size: 18px; // Set the font size for the show title
    font-weight: bold; // Apply bold font weight to the show title
    margin-top: 10px; // Apply top margin to the show title
  }

  .show-description {
    font-size: 14px; // Set the font size for the show description
    margin-bottom: 10px; // Apply bottom margin to the show description
  }

  .show-seasons {
    font-size: 12px; // Set the font size for the show seasons
    display: inline-block; // Display the show seasons as an inline block element
    padding: 4px 8px; // Apply padding to the show seasons
    background-color: #fff; // Set the background color for the show seasons
    color: #000; // Set the text color for the show seasons
    border-radius: 16px; // Apply border radius to the show seasons
    margin-bottom: 5px; // Apply bottom margin to the show seasons
  }

  .load-more-container {
    display: flex; // Display the load more container as a flex container
    justify-content: center; // Center child elements horizontally
    margin-top: 20px; // Apply top margin to the load more container
  }
  /* Genres */
  .genre-container {
    display: inline-block; // Display the genre container as an inline block element
    position: relative; // Set the position of the genre container to relative

    padding: 5px; // Apply padding to the genre container
    border-radius: 4px; // Apply border radius to the genre container
  }

  .genre-label {
    position: absolute; // Set the position of the genre label to absolute

    top: -8px; // Position the genre label at the top
    left: 8px; // Position the genre label at the left
    padding: 0 4px; // Apply padding to the genre label
    font-size: 12px; // Set the font size for the genre label
    font-weight: bold; // Apply bold font weight to the genre label
  }

  .genre-pill {
    font-size: 12px; // Set the font size for the genre pill
    display: inline-block; // Display the genre pill as an inline block element
    padding: 4px 8px; // Apply padding to the genre pill
    background-color: #3d3d3d; // Set the background color for the genre pill
    color: #ffffff; // Set the text color for the genre pill
    border-radius: 16px; // Apply border radius to the genre pill
    margin-bottom: 0px; // Apply bottom margin to the genre pill
    margin-right: 4px; // Apply right margin to the genre pill
    cursor: pointer; // Set the cursor to pointer for the genre pill
    margin: 2px; // Apply margin to the genre pill
  }

  .genre-pill:last-child {
    margin-right: 0; // Remove the right margin from the last genre pill
  }

  .genre-list {
    display: flex; // Display the genre list as a flex container
    flex-wrap: wrap; // Allow the genre list to wrap to the next line
  }

  .show-genres {
    margin-top: 10px; // Apply top margin to the show genres
    margin-bottom: 10px; // Apply bottom margin to the show genres
  }
  .last-updated {
    font-size: 10px; // Set the font size for the last updated text
  }

  .loading-spinner {
    display: flex; // Display the loading spinner as a flex container
    justify-content: center; // Center child elements horizontally
    align-items: center; // Center child elements vertically
    height: 100px; // Set the height of the loading spinner
    margin-top: 20px; // Apply top margin to the loading spinner
  }

  form {
    display: flex; // Display the form as a flex container
    justify-content: center; // Center child elements horizontally
    margin: 20px; // Apply margin to the form
  }

  form input {
    width: 80%; // Set the width of the form input to 80%
    padding: 10px; // Apply padding to the form input
  }
  .filter-input {
    margin: 20px; // Apply margin to the filter input
    padding: 20px; // Apply padding to the filter input
    border: 1px solid #ccc; // Apply border to the filter input
    border-radius: 4px; // Apply border radius to the filter input
    font-size: 16px; // Set the font size for the filter input
  }

  .filter-input::placeholder {
    color: #999; // Set the placeholder color for the filter input
  }

  .filter-input:focus {
    outline: none; // Remove the outline when the filter input is focused
    border-color: #31c48d; // Set the border color when the filter input is focused
    box-shadow: 0 0 5px rgba(49, 196, 141, 0.5); // Apply a box shadow when the filter input is focused
  }
  .genre-filter {
    justify-content: center; // Center child elements horizontally
    text-align: center; // Center child elements horizontally
  }

  .sliderDiv {
    width: 100%;
  }
  .slick-dots {
    margin: 20px;
  }

  .slick-next {
    font-size: 3rem;
    border-radius: 100%;
    color: white;
    padding: 0.5rem;
    background-color: grey;
  }
  .slick-prev {
    font-size: 3rem;
    padding: 0.5rem;
    left: -2.5rem;
    color: white;
    border-radius: 100%;
    background-color: grey;
  }
`;

export const SeasonsStyles = styled.div`
  position: relative; // Set the position of the component to relative
  display: flex; // Display the component as a flex container
  flex-direction: column; // Arrange child elements vertically
  align-items: center; // Center child elements horizontally
  margin-bottom: 20px; // Apply bottom margin to the component

  .season-selector label {
    font-size: 16px; // Set the font size for the season selector label
    margin-bottom: 5px; // Apply bottom margin to the season selector label
    font-weight: bold; // Apply bold font weight to the season selector label
    margin-right: 1rem; // Apply right margin to the season selector label
  }

  select {
    position: relative; // Set the position of the select element to relative
    width: 310px; // Set the width of the select element

    background-color: #31c48d; // Set the background color for the select element
    color: #fff; // Set the text color for the select element
    appearance: none; // Remove the default appearance of the select element
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z' fill='%23fff' /%3E%3C/svg%3E"); // Set a background image for the select element
    background-repeat: no-repeat; // Prevent the background image from repeating
    background-position: right 8px center; // Position the background image to the right with a vertical center alignment
    background-size: 25px; // Set the size of the background image
    padding: 0.5rem; // Apply padding to the select element
    border: none; // Remove the border of the select element
  }
`;

export const SinglePodcastStyles = styled.div`
  display: flex; // Display the component as a flex container
  flex-direction: column; // Arrange child elements vertically
  align-items: center; // Center child elements horizontally
  padding: 20px; // Apply padding to the component
  text-align: center; // Center align text within the component

  .episode-number-pill {
    font-size: 10px; // Set the font size for the episode number pill
    display: inline-block; // Display the pill as an inline block element
    padding: 4px 8px; // Apply padding to the pill
    background-color: #fff; // Set the background color for the pill
    color: #000; // Set the text color for the pill
    border-radius: 16px; // Apply border radius to create a rounded shape
    font-weight: bold; // Apply bold font weight to the pill
    margin-bottom: 5px; // Apply bottom margin to the pill
  }

  .show-title {
    font-size: 32px; // Set the font size for the show title
    margin-bottom: 10px; // Apply bottom margin to the show title
  }

  .show-description {
    font-size: 16px; // Set the font size for the show description
    margin-bottom: 20px; // Apply bottom margin to the show description
    color: #31C48D; // Set the text color for the show description
  }

  .single-show-image {
    max-width: 300px; // Set the maximum width for the single show image
    height: auto; // Set the height of the single show image to auto to maintain aspect ratio
    margin-bottom: 20px; // Apply bottom margin to the single show image
  }

  .season-selector {
    margin-bottom: 20px; // Apply bottom margin to the season selector
  }

  select {
    padding: 10px 20px; // Apply padding to the select element
    font-size: 16px; // Set the font size for the select element
    border: none; // Remove the border of the select element
    background-color: #31c48d; // Set the background color for the select element
    color: #fff; // Set the text color for the select element
    cursor: pointer; // Set the cursor to a pointer when hovering over the select element
  }

  .selected-season-title {
    font-size: 24px; // Set the font size for the selected season title
    margin-bottom: 10px; // Apply bottom margin to the selected season title
  }

  .episode-list {
    list-style-type: none; // Remove the bullet points from the episode list
    padding: 0; // Remove padding from the episode list
    margin: 0; // Remove margin from the episode list
    text-align: left; // Left align the text within the episode list
    overflow: hidden; // Hide any content that overflows the episode list
  }

  .episode-item {
    margin-bottom: 20px; // Apply bottom margin to each episode item
    padding: 15px; // Apply padding to each episode item
    background-color: #8b8b9b; // Set the background color for each episode item
  }

  .episode-title {
    font-size: 20px; // Set the font size for the episode title
    margin-top: 10px; // Apply top margin to the episode title
    margin-bottom: 5px; // Apply bottom margin to the episode title
  }

  .episode-description {
    font-size: 14px; // Set the font size for the episode description
    color: #fff; // Set the text color for the episode description
  }

  .go-back-btn {
    margin: 25px 0px 20px 0px; // Apply margins to the go back button
    font-size: 16px; // Set the font size for the go back button
    border: none; // Remove the border of the go back button
    background-color: dodgerblue; // Set the background color for the go back button
    color: #fff; // Set the text color for the go back button
  }

  .load-more-container {
    display: flex; // Display the load more container as a flex container
    justify-content: center; // Center align child elements horizontally within the container
    margin-top: 20px; // Apply top margin to the load more container
  }

  .favorite-icon {
    color: pink; // Set the color for the favorite icon
    cursor: pointer; // Set the cursor to a pointer when hovering over the favorite icon
  }

  .favourite-icon {
    color: pink; // Set the color for the favourite icon
    cursor: pointer; // Set the cursor to a pointer when hovering over the favourite icon
  }

  /* LOADING SPINNER */

  .loading-spinner {
    display: flex; // Display the loading spinner as a flex container
    text-align: center; // Center align text within the loading spinner
    justify-content: center; // Center align child elements horizontally within the container
    align-items: center; // Center align child elements vertically within the container
    height: 100px; // Set the height of the loading spinner
    margin-top: 20px; // Apply top margin to the loading spinner
  }
`;
export const PodcastPlayerStyles = styled.div`
  .audio-loader {
    position: fixed; // Position the audio loader element
    bottom: 0; // Align it to the bottom of the container
    left: 0; // Align it to the left of the container
    width: 100%; // Set its width to 100% of the container
    background-color: #1b1b1b; // Set the background color for the audio loader
    padding: 5px; // Apply padding to the audio loader
    z-index: 9999; // Set a high z-index to ensure it appears above other elements
  }

  .audio {
    position: fixed; // Position the audio element
    bottom: 0; // Align it to the bottom of the container
    left: 0; // Align it to the left of the container
    width: 100%; // Set its width to 100% of the container
    background-color: #1b1b1b; // Set the background color for the audio element
    padding: 5px; // Apply padding to the audio element
  }

  .audio audio {
    width: 100%; // Set the width of the audio player to 100% of its container
    max-width: 100%; // Set the maximum width of the audio player to 100% to ensure it doesn't overflow
  }
  .player-container {
    // Empty block, no styles defined for the .player-container class
  }
`;

export const FooterStyles = styled.footer`
  /* FOOTER */

  background-color: #B30A85; // Set the background color for the footer
  padding: 50px 0; // Set padding for the footer (top and bottom: 50px, left and right: 0)

  text-align: center; // Center align the content within the footer
  width: 100%; // Set the width of the footer to 100% of its container

  .footer-extra {
    font-size: 13px; // Set the font size for the .footer-extra class
  }
  
`;

export const ShowFavoritePodcastStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px; // Set padding for the container

  .form-container {
    margin: 20px; // Set margin for the form container
  }
  .favourite-icon {
    color: pink; // Set color for the favourite icon
    cursor: pointer; // Set cursor style to indicate it is clickable
  }
  .single-show-image {
    max-width: 300px; // Set the maximum width for the single show image
    height: auto; // Maintain the aspect ratio of the image
    margin-bottom: 20px; // Set margin at the bottom of the image
  }

  .carousel li {
    cursor: pointer; // Set cursor style to indicate it is clickable
  }
  .loading-spinner {
    display: flex; // Display as a flex container
    text-align: center; // Center align the content horizontally
    justify-content: center; // Center align the content vertically
    align-items: center; // Center align the content horizontally
    height: 100px; // Set the height of the loading spinner container
    margin-top: 20px; // Set margin at the top of the loading spinner
  }
  input {
    width: 80%; // Set the width of the form input to 80%
    padding: 10px; // Apply padding to the form input
  }
`;
 
// export const prevArrowStyles = {
// //   position: 'absolute',
// //   top: '50%',
// //   left: '-30px',
// //   transform: 'translateY(-50%)',
// //   zIndex: 1,
// //   color: '#000',
// //   fontSize: '2rem',
// //   cursor: 'pointer',
// // };

// // export const nextArrowStyles = {
// //   position: 'absolute',
// //   top: '50%',
// //   right: '-30px',
// //   transform: 'translateY(-50%)',
// //   zIndex: 1,
// //   color: '#000',
// //   fontSize: '2rem',
// //   cursor: 'pointer',
//  };
