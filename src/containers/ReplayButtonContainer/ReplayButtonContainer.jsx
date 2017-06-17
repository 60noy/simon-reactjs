import React from 'react';
import PropTypes from 'prop-types';
import ReplayButton from './ReplayButton';

const ReplayButtonContainer = ({ onReplayGame }) => (
  <div>
    <ReplayButton onClick={onReplayGame} />
  </div>
);

ReplayButtonContainer.propTypes = {
  onReplayGame: PropTypes.func.isRequired,
};
export default ReplayButtonContainer;
