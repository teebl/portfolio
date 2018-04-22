import React, { Component } from 'react';

export default class ContactIcon extends Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
		<div className="ContactIcon">
		<image src={this.propsicon} />
		</div>
		)
	}
}