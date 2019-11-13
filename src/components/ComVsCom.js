import React, { Component } from "react";
import PropTypes from "prop-types";
import { H1 } from "../elements/Text";
import Button from "../elements/Button";

import Line from "../elements/Line";
import FlexContainer from "../elements/FlexContainer";
import { setResult } from "../actions/result";
import { ROCK, PAPER, SCISSORS } from "../constants";
import { connect } from "react-redux";

export class ComVsCom extends Component {
  constructor(props) {
    super(props);
    this.handleClick.bind(this);
    this.state = { computer1Move: 0, computer2Move: 0 };
  }

  handleClick = e => {
    let elem1 = document.getElementById("computer1Move");
    let elem2 = document.getElementById("computer2Move");
    // Handle animation player move
    if (elem1 !== null) {
      elem1.classList.remove("bounce-in-bottom");
      // This line is used to reset animation
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

    let c1Move = this.getRandomArbitrary(1, 3);
    let c2Move = this.getRandomArbitrary(1, 3);
    this.setState({ computer1Move: c1Move, computer2Move: c2Move });
    // dispatch result to store
    this.props.setResult(c1Move, c2Move);
  };

  getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  render() {
    let renderedCom1Move, renderedCom2Move;
    switch (this.state.computer2Move) {
      case ROCK:
        renderedCom2Move = (
          <i
            id="computer2Move"
            className="fas fa-hand-rock  fa-6x bounce-in-bottom"
            style={{ color: "#F90787" }}
          ></i>
        );
        break;
      case PAPER:
        renderedCom2Move = (
          <i
            id="computer2Move"
            className="fas fa-hand-paper  fa-6x bounce-in-bottom"
            style={{ color: "#F90787" }}
          ></i>
        );
        break;
      case SCISSORS:
        renderedCom2Move = (
          <i
            id="computer2Move"
            className="fas fa-hand-peace  fa-6x bounce-in-bottom"
            style={{ color: "#F90787" }}
          ></i>
        );
        break;
      default:
        break;
    }

    switch (this.state.computer1Move) {
      case ROCK:
        renderedCom1Move = (
          <i
            id="computer1Move"
            className="fas fa-hand-rock  fa-6x bounce-in-bottom"
            style={{ color: "#8B00F4" }}
          ></i>
        );
        break;
      case PAPER:
        renderedCom1Move = (
          <i
            id="computer1Move"
            className="fas fa-hand-paper  fa-6x bounce-in-bottom"
            style={{ color: "#8B00F4" }}
          ></i>
        );
        break;
      case SCISSORS:
        renderedCom1Move = (
          <i
            id="computer1Move"
            className="fas fa-hand-peace  fa-6x bounce-in-bottom"
            style={{ color: "#8B00F4" }}
          ></i>
        );
        break;
      default:
        break;
    }

    return (
      <FlexContainer id="play-area" direction="column" align="center">
        <div>
          <Button
            onClick={this.handleClick}
            disabled={this.props.result ? true : false}
            style={
              this.props.result
                ? { pointerEvents: "none" }
                : { pointerEvents: "auto" }
            }
          >
            Click To Play
          </Button>
        </div>
        <H1 color="primary">Computer 2</H1>
        <div style={{ flexDirection: "row", transform: "rotate(180deg)" }}>
          <i
            className="fas fa-hand-rock fa-6x"
            id="1"
            style={{ padding: "20px" }}
          ></i>

          <i
            className="fas fa-hand-paper fa-6x"
            id="2"
            style={{ padding: "20px" }}
          ></i>

          <i
            className="fas fa-hand-peace fa-6x"
            id="3"
            style={{ padding: "20px" }}
          ></i>
        </div>
        <div
          style={{
            height: "200px",
            transform: "rotate(180deg)"
          }}
        >
          {this.props.result !== null ? renderedCom2Move : <></>}
        </div>

        <div>
          <Line bg="gradient" hg="3" pd="10px" mg="50px" />
        </div>

        <div
          style={{
            height: "200px"
          }}
        >
          {this.props.result !== null ? renderedCom1Move : <></>}
        </div>

        <div style={{ flexDirection: "row" }}>
          <i
            className="fas fa-hand-rock fa-6x"
            id="1"
            style={{ padding: "20px" }}
          ></i>

          <i
            className="fas fa-hand-paper fa-6x"
            id="2"
            style={{ padding: "20px" }}
          ></i>

          <i
            className="fas fa-hand-peace fa-6x"
            id="3"
            style={{ padding: "20px" }}
          ></i>
        </div>
        <H1 color="primary">Computer 1</H1>
      </FlexContainer>
    );
  }
}

ComVsCom.propTypes = {
  setResult: PropTypes.func.isRequired,
  result: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  result: state.result.result
});
export default connect(mapStateToProps, { setResult })(ComVsCom);
