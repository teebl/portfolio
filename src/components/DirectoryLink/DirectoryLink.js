import React from "react";
import { NavLink } from "react-router-dom";

const DirectoryLink = props => {
  return (
    <NavLink
      activeClassName="activeLink"
      className="link"
      exact="true"
      to={props.directory}
    >
      <div className="DirectoryLink">{props.page}</div>
    </NavLink>
  );
};

export default DirectoryLink;
