import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SoundButtonContainer from '../../containers/SoundButtonContainer';
import sounds from '../../utils/sounds';

class SoundButtonsGrouper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { id: 0 },
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ],
    };
  }
  // handleButtonClick = (id) => {
  //   console.log(`id soundbuttons${id}`);
  //   const { buttons } = this.state;
  //   buttons[id].isActive = true;
  //   this.setState({ buttons });
  //   this.props.onButtonClick(id);
  //   // const buttons = this.state;
  //   // const btn = buttons[id];
  //     // TODO: check if I should add variable for whether there is another button playing
  //   // if (!btn.isActive && this.props.isUserTurn) {
  //   //   this.props.onButtonClick(id);
  //   // }
  // };

  render() {
    return (
      <div>
        {this.state.buttons.map(btn =>
          // TODO: add isClickable props for disabling click while button is playing
          (<SoundButtonContainer
            onClick={() => this.props.onButtonClick(btn.id)}
            key={btn.id}
            soundUrl={sounds[btn.id]}
          />),
        )}
      </div>
    );
  }
}

SoundButtonsGrouper.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
export default SoundButtonsGrouper;
