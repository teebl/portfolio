import React, { Component } from "react";

function ProjectCard(props) {

	const card = props.card
		return (
			<div className="ProjectCard">
				<div className="ProjectCardImage">
				<img src="http://via.placeholder.com/300x200" />
				</div>
				<h3 className="ProjectCardTitle">{card.title}</h3>
				<h4 className="ProjectCardSummary">
					{card.summary}
				</h4>
				<div className="ProjectCardBody">
				{card.body.map(p => <p>{p}</p>)}
				</div>
				<div className="ProjectCardTag">
				{card.tags.map(t => <span>{t}{" "}</span>)}
				</div>
			</div>
		);
	}

export default ProjectCard;
