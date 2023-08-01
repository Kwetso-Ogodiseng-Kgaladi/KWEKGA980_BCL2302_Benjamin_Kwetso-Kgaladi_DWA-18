import React from 'react';
import styled from 'styled-components';

// Define the styles for the button using styled-components
const StyledButton = styled.button`
  /* Add common button styles here */
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px;

  ${({ variant }) =>
    variant === 'primary' &&
    `
    background-color: grey;
    color: white;
  `}

  ${({ variant }) =>
    variant === 'secondary' &&
    `
    background-color: dodgerblue;
    color: white;
  `}

  ${({ variant }) =>
    variant === 'third' &&
    `
    background-color: #31c48d;
    color: white;
  `}

  ${({ variant }) =>
    variant === 'yellow' &&
    `
    background-color: yellow;
    color: black;
  `}
`;

// Button component
const Button = ({ variant = 'primary', ...props }) => {
  return <StyledButton variant={variant} {...props} />;
};

export default Button;
