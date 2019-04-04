import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledDirectoryLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  background-color: transparent;
  border-right: 0px;
  color: black;
  line-height: 40px;
  height: 40px;
  padding-right: 10px;
  font-size: 12px;
  font-family: "Work Sans", sans-serif;
  letter-spacing: 3px;
  text-align: right;

  :hover {
    color: orange;
  }
`;

const DirectoryLink = props => {
  return (
    <StyledDirectoryLink exact to={props.directory}>
      {props.page}
    </StyledDirectoryLink>
  );
};
export default DirectoryLink;
