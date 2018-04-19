import React, { Component } from 'react';
import profilePic from "../resources/profile.jpg";

export default class PictureCard extends Component {
	render() {
		return (
			<div className="PictureCard">
			<img src={profilePic} />
			</div>
			)
	}
}