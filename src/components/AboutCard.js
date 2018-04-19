import React, { Component } from 'react';

export default class AboutCard extends Component {
	render() {
		const aboutText = "Currently employed as an Architectural Restoration Technician, Trevor gained interest in programming and quickly developed a deep interest in the craft. starting in August of 2017, Trevor has been honing his skills with the intent of seeing what the tech industry has to offer. Although seemingly worlds apart, carpentry and coding share many skill sets. Problem solving, minimization of superfluous actions, minimization of resource use, and focus on product delivery have all been assets in Trevor's development."
	return(
	<div className="AboutCard">
	<p>{aboutText}</p>
	</div>)
	}
}