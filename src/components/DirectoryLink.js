import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class DirectoryLink extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavLink
				activeClassName="activeLink"
				className="link"
				exact="true"
				to={this.props.directory}
			>
				<div className="DirectoryLink">{this.props.page}</div>
			</NavLink>
		);
	}
}
