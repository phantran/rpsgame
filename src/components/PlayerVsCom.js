import React, { Component } from "react";
import PropTypes from "prop-types";
import { H1 } from "../elements/Text";
import Line from "../elements/Line";
import FlexContainer from "../elements/FlexContainer";
import { setResult } from "../actions/result";
import { ROCK, PAPER, SCISSORS } from "../constants";
import { connect } from "react-redux";

export class PlayerVsCom extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
    this.state = { computerMove: 0, playerMove: 0 };
  }

  handleClick = e => {
    let elem1 = document.getElementById("playerMove");
    let elem2 = document.getElementById("computerMove");
    // Handle animation player move
    if (elem1 !== null) {
      elem1.classList.remove("bounce-in-bottom");
      // This line is important and it's used to reset animation
      void elem1.offsetWidth;
      elem1.classList.add("bounce-in-bottom");
    }
    // Handle animation computer move
    if (elem2 !== null) {
      elem2.classList.remove("bounce-in-bottom");
      // This line is used to reset animation
      void elem2.offsetWidth;
      elem2.classList.add("bounce-in-bottom");
    }

    let cMove = this.getRandomArbitrary(1, 3);
    let pMove = parseInt(e.target.id);
    this.setState({ computerMove: cMove, playerMove: pMove });
    // dispatch result to store
    this.props.setResult(pMove, cMove);
  };

  getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  render() {
    let renderedComMove, renderedPlayerMove;
    // Map moves to corresponding icons
    switch (this.state.computerMove) {
      case ROCK:
        renderedComMove = (
          <i
            id="computerMove"
            className="fas fa-hand-rock  fa-6x bounce-in-bottom"
            style={{ color: "#F90787" }}
          ></i>
        );
        break;
      case PAPER:
        renderedComMove = (
          <i
            id="computerMove"
            className="fas fa-hand-paper  fa-6x bounce-in-bottom"
            style={{ color: "#F90787" }}
          ></i>
        );
        break;
      case SCISSORS:
        renderedComMove = (
          <i
            id="computerMove"
            className="fas fa-hand-peace  fa-6x bounce-in-bottom"
            style={{ color: "#F90787" }}
          ></i>
        );
        break;
      default:
        break;
    }

    // Map moves to corresponding icons
    switch (this.state.playerMove) {
      case ROCK:
        renderedPlayerMove = (
          <i
            id="playerMove"
            className="far fa-hand-rock  fa-6x bounce-in-bottom"
            style={{ color: "#8B00F4" }}
          ></i>
        );
        break;
      case PAPER:
        renderedPlayerMove = (
          <i
            id="playerMove"
            className="far fa-hand-paper  fa-6x bounce-in-bottom"
            style={{ color: "#8B00F4" }}
          ></i>
        );
        break;
      case SCISSORS:
        renderedPlayerMove = (
          <i
            id="playerMove"
            className="far fa-hand-peace  fa-6x bounce-in-bottom"
            style={{ color: "#8B00F4" }}
          ></i>
        );
        break;
      default:
        break;
    }

    return (
      <FlexContainer direction="column" align="center">
        <H1 color="primary">Computer Move</H1>
        <div
          style={{
            height: "200px",
            transform: "rotate(180deg)"
          }}
        >
          {this.props.result !== null ? renderedComMove : <></>}
        </div>

        <div>
          <Line bg="gradient" hg="3" pd="10px" mg="50px" />
        </div>

        <div
          style={{
            height: "200px"
          }}
        >
          {this.props.result !== null ? renderedPlayerMove : <></>}
        </div>

        <div style={{ flexDirection: "row" }}>
          <i
            className="far fa-hand-rock fa-6x player-option"
            onClick={!this.props.result ? this.handleClick : null}
            id="1"
            style={
              this.props.result
                ? { padding: "20px", color: "gray" }
                : { padding: "20px" }
            }
          ></i>

          <i
            className="far fa-hand-paper fa-6x player-option"
            onClick={!this.props.result ? this.handleClick : null}
            id="2"
            style={
              this.props.result
                ? { padding: "20px", color: "gray" }
                : { padding: "20px" }
            }
          ></i>

          <i
            className="far fa-hand-peace fa-6x player-option"
            onClick={!this.props.result ? this.handleClick : null}
            id="3"
            style={
              this.props.result
                ? { padding: "20px", color: "gray" }
                : { padding: "20px" }
            }
          ></i>
        </div>
        <H1 color="primary">Choose Your Move</H1>
      </FlexContainer>
    );
  }
}

PlayerVsCom.propTypes = {
  setResult: PropTypes.func.isRequired,
  result: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  result: state.result.result
});

export default connect(mapStateToProps, { setResult })(PlayerVsCom);
