import React, { Component } from 'react';
import ReplayButton from '../../components/ReplayButton';
import SoundButtonsGrouper from '../../components/SoundButtonsGrouper';
import './style.css';

class Main extends Component {
  constructor(props) {
    super(props);
    // combo : the current combo of the game
    // isUserTurn : whether this is the turn of the player
    // playerCombo : the combo the player submitted
    this.state = {
      combo: [],
      playerCombo: [],
      isUserTurn: false,
    };
  }
  componentWillMount() {
    this.onComputerTurn();
  }
  // starts making the combos sound
  onComputerTurn = () => {
    this.generateNewNumberAndPushToCombo();
    this.startComboSound();
  }
  // gets the button id and stimulates click
  handleSoundButtonClick = (btnID) => {
    const { combo } = this.state;
    combo.push(btnID);
    this.setState({ combo });
    console.log(`button id ${btnID} pressed`);
  }
  // restarts game
  handleReplayButtonClick = () => {
    // replay game
    console.log('replay game');
  }
  // starts the game
  handleGameStart = () => {
    // new combo
  }
  // generates random number and adds it to the combo in state
  generateNewNumberAndPushToCombo = () => {
    const num = Math.floor((Math.random() * 3) + 0);
    const { combo } = this.state;
    combo.push(num);
    this.setState({ combo });
  }
  // starts playing to combo sounds
  startComboSound = () => {
    this.setState({ isPlaying: true });
  }
  render() {
    return (
      // TODO: add isUserTurn for hover effect when it's the user's turn
      <div>
        <SoundButtonsGrouper
          onButtonClick={this.handleSoundButtonClick}
        />

        <ReplayButton
          onClick={this.handleReplayButtonClick}
        />
      </div>
    );
  }
}

export default Main;
