import React from 'react';
import PropTypes from 'prop-types';
import { GlobalContainer } from '../../globalContainer/GlobalContainer';
import { StyledTitle } from './Title.styled';

const Title = ({ title }) => {
  return (
    <GlobalContainer>
      <StyledTitle>{title}</StyledTitle>
    </GlobalContainer>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
