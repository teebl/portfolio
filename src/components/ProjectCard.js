import React, { Component } from "react";

export default class ProjectCard extends Component {
	render() {
		return (
			<div className="ProjectCard">
				<div className="ProjectCardImage">
				<img src="http://via.placeholder.com/300x200" />
				</div>
				<h3 className="ProjectCardTitle">Project Title</h3>
				<h4 className="ProjectCardSummary">
					{" "}
					A quick summary of the project
				</h4>
				<div className="ProjectCardBody">
				<p>
					Here is the body, there may be a bit of text in here but
					then again who knows? I might have a lot to say about a
					project, and what I learned. These things take a lot of
					work, after all, and I learn a lot.
				</p>
				<p>
					There could be a second paragraph if I really want to get
					into the details. I think I would be stretching the user's
					patience though. Brevity and all that.
				</p>
				</div>
				<div className="ProjectCardTag">JavaScript</div>
			</div>
		);
	}
}
