import React, { Component } from "react";

export default class About extends Component {
	render() {
		return (
			<div className="About">
				<div class="AboutTitle"><h2>About</h2></div>
				<div className="AboutText">{this.props.about.text.map(p => <p>{p}</p>)}</div>
			</div>
		);
	}
}
