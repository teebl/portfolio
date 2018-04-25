import React, { Component } from "react";

function ProjectCard(props) {
	const card = props.card;
	const thumbnail = process.env.PUBLIC_URL + card.thumbnail;
	return (
		<div className="ProjectCard">
			<div className="ProjectCardImage">
				<a href={card.link}>
					<img src={thumbnail} />
				</a>
			</div>
			<h3 className="ProjectCardTitle">{card.title}</h3>
			<h4 className="ProjectCardSummary">{card.summary}</h4>
			<div className="ProjectCardBody">
				{card.body.map(p => <p>{p}</p>)}
			</div>
			{card.tags.map(t => <div className="ProjectCardTag">{t}</div>)}
			
		</div>
	);
}

export default ProjectCard;
