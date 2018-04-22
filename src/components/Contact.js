import React, { Component } from 'react';
import Icon from './Icon';
import at from '../resources/icons/at.svg';

export default class Contact extends Component {
	render() {
		return(
			<div className="Contact">
			<div className="ContactTitle">
			<h2>Contact</h2>
			</div>

			<Icon icon="email" />
			<Icon icon="github" />
			<Icon icon="linkedin" />
			<Icon icon="twitter" />
			</div>
)

	}
}