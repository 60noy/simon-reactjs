import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import SoundButton from '../../components/SoundButton';

class SoundButtonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
  }
  handleClick = () => {
    this.setState({ isPlaying: true });
    this.props.onClick();
  }
  handleSongPlaying = () => {
    this.setState({ isPlaying: true });
  }
  // triggers when the sound finished playing
  // sets isPlaying to false
  handleSongFinishedPlaying = () => {
    this.setState({ isPlaying: false });
  }
  render() {
    const { isPlaying } = this.state;
    return (
      <div>
        <SoundButton
          onClick={this.handleClick}
          isActive={isPlaying}
        />
        {isPlaying &&
        <Sound
          playStatus={Sound.status.PLAYING}
          url={this.props.soundUrl}
          onPlaying={this.handleSongPlaying}
          onFinishedPlaying={this.handleSongFinishedPlaying}
        />
      }
      </div>
    );
  }
}
SoundButtonContainer.propTypes = {
  onClick: PropTypes.func.isRequired,
  soundUrl: PropTypes.string.isRequired,
};
export default SoundButtonContainer;
