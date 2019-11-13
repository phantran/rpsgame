import React from 'react';
import PropTypes from 'prop-types';
import Options from './Options';
import PlayerVsCom from './PlayerVsCom';
import ComVsCom from './ComVsCom';
import Result from './Result';
import MainContainer from '../elements/MainContainer';
import { connect } from 'react-redux';

import { PLAYER_VS_COMPUTER, COMPUTER_VS_COMPUTER } from '../constants';

const MainScreen = ({ playMode }) => {
  let playarea;
  if (playMode === PLAYER_VS_COMPUTER) {
    playarea = <PlayerVsCom />;
  } else if (playMode === COMPUTER_VS_COMPUTER) {
    playarea = <ComVsCom />;
  } else {
    // Default play mode is chosen as player and computer
    playarea = <PlayerVsCom />;
  }
  return (
    <MainContainer>
      <Options />
      {playarea}
      <Result />
    </MainContainer>
  );
};

MainScreen.propTypes = { playMode: PropTypes.number.isRequired };

const mapStateToProps = state => ({
  playMode: state.mode.playMode
});

export default connect(mapStateToProps)(MainScreen);
