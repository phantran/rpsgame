import React from "react";
import PropTypes from "prop-types";
import Button from "../elements/Button";
import { H1 } from "../elements/Text";
import FlexContainer from "../elements/FlexContainer";
import { connect } from "react-redux";
import { setPlayMode } from "../actions/mode";
import { PLAYER_VS_COMPUTER, COMPUTER_VS_COMPUTER } from "../constants";

export const Options = ({ setPlayMode, playMode }) => {
  return (
    <FlexContainer direction="column" align="center">
      <div>
        <H1 color="primary">Game Mode</H1>
      </div>

      <div>
        <Button
          bg={playMode === PLAYER_VS_COMPUTER ? "gradient" : "transparent"}
          onClick={e => {
            setPlayMode(PLAYER_VS_COMPUTER);
          }}
        >
          Player vs Computer
        </Button>
      </div>
      <div>
        <Button
          bg={playMode === COMPUTER_VS_COMPUTER ? "gradient" : "transparent"}
          onClick={e => {
            setPlayMode(COMPUTER_VS_COMPUTER);
          }}
        >
          Computer vs Computer
        </Button>
      </div>
    </FlexContainer>
  );
};

Options.propTypes = {
  setPlayMode: PropTypes.func.isRequired,
  playMode: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  playMode: state.mode.playMode
});

export default connect(mapStateToProps, { setPlayMode })(Options);
