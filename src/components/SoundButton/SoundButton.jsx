import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  default: {
    backgroundColor: 'red',
    opacity: 0.8,
  },
  active: {
    backgroundColor: 'blue',
    opacity: 1,
  },
};

const SoundButton = ({ onClick, isActive }) => (
  <button
    onClick={onClick}
    style={isActive ? styles.active : styles.default}
  > sound </button>
);

SoundButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
export default SoundButton;
