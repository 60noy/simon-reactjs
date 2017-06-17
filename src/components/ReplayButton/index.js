import React from 'react';
import PropTypes from 'prop-types';

const ReplayButton = ({ onClick }) => (
  <button
    onClick={onClick}
  >
    replay
  </button>
);

ReplayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default ReplayButton;
