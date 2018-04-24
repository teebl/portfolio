import React, { Component } from 'react';
import Icon from './Icon';

export default class Contact extends Component {
		constructor(props) {
			super(props);
		}

	render() {


		return(
			<div className="Contact">
			<div className="ContactTitle">
			<h2>Contact</h2>
			</div>
			{this.props.contact.map(i => <Icon icon={i} />)}
			</div>
)

	}
}