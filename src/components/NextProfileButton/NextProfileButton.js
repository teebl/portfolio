import React, { Component } from "react";
import styled from "styled-components";

const StyledNextProfileButton = styled.div`
  position: fixed;
  bottom: 20px;
  left: 5px;
  color: black;
  max-height: $navbar-dimension;
  vertical-align: middle;
  border: 1px solid lightgrey;
  font-size: 10px;
  font-family: "Work Sans", sans-serif;
  letter-spacing: 3px;
  color: rgba(0, 0, 0, 0);
  text-align: right;
  background-color: rgba(0, 0, 0, 0);
  margin: 5px;
  padding: 5px;
  cursor: pointer;

  :hover {
    display: inline;
    color: orange;
  }

  @media (max-width: 1024px) {
    border: 1px solid rgba(0, 0, 0, 0);
  }
`;

export default class NextProfileButton extends Component {
  constructor(props) {
    super(props);

    this.buttonPressHandler = this.buttonPressHandler.bind(this);
  }

  buttonPressHandler(e) {
    this.props.buttonPress();
  }

  render() {
    const profileClassName = this.props.profileClassName;
    return (
      <StyledNextProfileButton onClick={this.buttonPressHandler}>
        HULKAMANIA
      </StyledNextProfileButton>
    );
  }
}
