import React from "react";
import PropTypes from "prop-types";
import FlexContainer from "../elements/FlexContainer";
import { H1 } from "../elements/Text";
import Button from "../elements/Button";
import { connect } from "react-redux";
import { setNewGame } from "../actions/new";
import { P1WIN, P2WIN, DRAW } from "../constants";
import { PLAYER_VS_COMPUTER, COMPUTER_VS_COMPUTER } from "../constants";

export const Result = ({ result, playMode, setNewGame }) => {
  let displayed_result = null;
  function resetAnimation() {
    let elem = document.getElementById("result");
    if (elem !== null) {
      elem.classList.remove("shake-horizontal");
      // This line is used to reset animation
      void elem.offsetWidth;
      elem.classList.add("shake-horizontal");
    }
  }

  resetAnimation();

  if (playMode === PLAYER_VS_COMPUTER) {
    if (result === P1WIN) {
      displayed_result = (
        <H1 id="result" className="shake-horizontal" color="pink">
          You Win!
        </H1>
      );
    } else if (result === P2WIN) {
      displayed_result = (
        <H1 id="result" className="shake-horizontal" color="pink">
          You Lose!
        </H1>
      );
    } else if (result === DRAW) {
      displayed_result = (
        <H1 id="result" className="shake-horizontal" color="pink">
          Draw!
        </H1>
      );
    }
  } else if (playMode === COMPUTER_VS_COMPUTER) {
    if (result === P1WIN) {
      displayed_result = (
        <H1 id="result" className="shake-horizontal" color="pink">
          Computer 1 Wins!
        </H1>
      );
    } else if (result === P2WIN) {
      displayed_result = (
        <H1 id="result" className="shake-horizontal" color="pink">
          Computer 2 Wins!
        </H1>
      );
    } else if (result === DRAW) {
      displayed_result = (
        <H1 id="result" className="shake-horizontal" color="pink">
          Draw!
        </H1>
      );
    }
  }

  return (
    <FlexContainer direction="column" align="center">
      <div>{displayed_result}</div>
      {displayed_result !== null ? (
        <div>
          <Button onClick={setNewGame}>Play Again!</Button>
        </div>
      ) : (
        <></>
      )}
    </FlexContainer>
  );
};

Result.propTypes = {
  result: PropTypes.number,
  playMode: PropTypes.number.isRequired,
  setNewGame: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  result: state.result.result,
  playMode: state.mode.playMode
});

export default connect(mapStateToProps, { setNewGame })(Result);
