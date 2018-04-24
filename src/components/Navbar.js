import React, { Component } from 'react';
import DirectoryLink from './DirectoryLink';
import Icon from './Icon';

export default class Navbar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			sidebarCollapse: true,
		}

		this.collapseSwitch = this.collapseSwitch.bind(this);
	}


	collapseSwitch() {
		this.setState({sidebarCollapse: !this.state.sidebarCollapse});
		console.log('sidebarCollapse is ' + this.state.sidebarCollapse)
	}
// <DirectoryLink page="SKILLS" directory="/Skills" />
// onClick of boring button: ignore default, action creator. 

	render() {

		const collapseClassName = (this.state.sidebarCollapse) ? "sidebarCollapsed" : "sidebarExpanded";

		return(
			<div className="Navbar">
				<div className={"navbarLinks " + collapseClassName}>
				<DirectoryLink page="HOME" directory="/" />
				<DirectoryLink page="ABOUT" directory="/About" />
				
				<DirectoryLink page="PROJECTS" directory="/Projects" />
				<DirectoryLink page="CONTACT" directory="/Contact" />
				<button>boring</button>
				</div>
				<div className ="collapseButton" onClick={this.collapseSwitch}><Icon icon="bars" size="60" /></div>
			</div>
			)
	}
}