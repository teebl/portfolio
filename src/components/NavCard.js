import React, { Component } from 'react';

export default class NavCard extends Component {
	render() {
		return(
		<div className="NavCard">
		<div className="navLink"><a href="#">About</a></div>
		<div className="navLink"><a href="#">Skills</a></div>
		<div className="navLink"><a href="#">Contact</a></div>
		<div className="navLink"><a href="#">Test</a></div>
		</div>
		)
	}
}