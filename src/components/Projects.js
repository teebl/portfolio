import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

export default class Projects extends Component {
	render() {
		return(
			<div className="Projects">
			<h2 className="ProjectsTitle">Projects</h2>
			<div className="ProjectsBody">
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			</div>
			</div>
)

	}
}