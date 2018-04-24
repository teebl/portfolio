import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function DirectoryLink(props) {
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
}