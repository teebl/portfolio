import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

export default class Projects extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className="Projects">
			<h2 className="ProjectsTitle">Projects</h2>
			<div className="ProjectsBody">
			{this.props.projects.map( p => <ProjectCard  card={p} />)}
			</div>
			</div>
)

	}
}