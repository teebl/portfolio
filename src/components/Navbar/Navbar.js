import React, { Component } from "react";
import DirectoryLink from "../DirectoryLink";
import Icon from "../Icon";
import bars from "../../resources/bars";
import styled from "styled-components";

const StyledNavbar = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 110px;

  @media (max-width: 700px) {
    position: fixed;
    transform: translateY(0);
    top: 10px;
    right: 10px;
    align-content: end;
    z-index: 99;
    border: 0px;
    display: grid;
    align-content: end;
    grid-template-columns: 1fr;
    vertical-align: middle;
  }
`;

const NavbarLinks = styled.div`
  @media (max-width: 700px) {
    ${({ collapsed }) => collapsed && "display:none"};
  }
`;

const CollapseButton = styled.div`
  margin: auto;
  display: none;
  height: 60px;
  width: 60px;
  padding: 10px;
  padding-left: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  fill: white;

  @media (max-width: 700px) {
    display: block;
  }
`;

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarCollapse: true
    };

    this.collapseSwitch = this.collapseSwitch.bind(this);
  }

  collapseSwitch() {
    this.setState({ sidebarCollapse: !this.state.sidebarCollapse });
  }

  render() {
    const collapseClassName = this.state.sidebarCollapse
      ? "sidebarCollapsed"
      : "sidebarExpanded";

    return (
      <StyledNavbar>
        <CollapseButton onClick={this.collapseSwitch}>
          <Icon icon={bars} size="60" />
        </CollapseButton>
        <NavbarLinks
          onClick={this.collapseSwitch}
          collapsed={this.state.sidebarCollapse}
        >
          <DirectoryLink page="HOME" directory="/portfolio" />
          <DirectoryLink page="ABOUT" directory="/portfolio/About" />
          <DirectoryLink page="PROJECTS" directory="/portfolio/Projects" />
          <DirectoryLink page="CONTACT" directory="/portfolio/Contact" />
        </NavbarLinks>
      </StyledNavbar>
    );
  }
}
