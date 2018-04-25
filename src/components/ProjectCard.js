import React from "react";

function ProjectCard(props) {
	const card = props.card;
	const thumbnail = process.env.PUBLIC_URL + card.thumbnail;
	const profileClassName = props.profileClassName;
	return (
		<div className={profileClassName + " ProjectCard"}>
			<div className="ProjectCardImage">
				<a href={card.link}>
					<img src={thumbnail} alt={card.title + " thumbnail"}/>
				</a>
			</div>
			<h3 className={profileClassName + " ProjectCardTitle"}>
				{card.title}
			</h3>
			<h4 className={profileClassName + " ProjectCardSummary"}>
				{card.summary}
			</h4>
			<div className={profileClassName + " ProjectCardBody"}>
				{card.body.map(p => <p>{p}</p>)}
			</div>
			{card.tags.map(t => (
				<div className={profileClassName + " ProjectCardTag"}>{t}</div>
			))}
		</div>
	);
}

export default ProjectCard;
