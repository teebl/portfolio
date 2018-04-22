import React, { Component } from 'react';
import ContactIcon from './ContactIcon';
import at from '../resources/icons/at.svg';

export default class Contact extends Component {
	render() {
		return(
			<div className="Contact">
			<div className="ContactTitle">
			<h2>Contact</h2>
			</div>

			<ContactIcon icon="../resources/icons/at.svg" />
			</div>
)

	}
}