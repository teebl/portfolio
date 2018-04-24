import React, { Component } from "react";

export default class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="About">
				<h2>About</h2>
				{this.props.about.text.map(p => <p>{p}</p>)}
			</div>
		);
	}
}
