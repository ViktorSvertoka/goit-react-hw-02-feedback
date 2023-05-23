import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
