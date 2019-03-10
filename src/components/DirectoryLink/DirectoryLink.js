import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "activeLink";

const StyledDirectoryLink = styled(NavLink).attrs({
  activeClassName
})`
  display:block;
  text-decoration: none;
  color: white;
  background-color: rgba(255,255,255, 0.8);
  border-right: 0px;
  color: black;
  max-height: 80px;
  border-right: 2px solid rgba(0, 0, 0, 0);
  font-size: 12px;
  font-family: "Work Sans", sans-serif;
  letter-spacing: 3px;
  text-align: right;
  margin: 5px;
  padding: 5px; }

  :hover {
    color: orange; }

  &.${activeClassName} {
    border-right: 2px solid black;
  }
`;

const DirectoryLink = props => (
  <StyledDirectoryLink exact="true" to={props.directory}>
    {props.page}
  </StyledDirectoryLink>
);

export default DirectoryLink;
