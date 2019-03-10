import React, { Component } from "react";
import Icon from "../../components/Icon";
import styled from "styled-components";

const StyledContact = styled.div`
  height: 100%;
  display: grid;
  margin: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  align-items: center;

  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 150px;
  }
`;

const ContactTitle = styled.div`
  text-align: center;
  grid-column: span 2;
`;

export default class Contact extends Component {
  render() {
    return (
      <StyledContact>
        <ContactTitle>
          <h2>Contact</h2>
        </ContactTitle>
        {this.props.contact.map(i => (
          <Icon icon={i} />
        ))}
      </StyledContact>
    );
  }
}
