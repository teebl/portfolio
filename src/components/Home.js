import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import profile from "../resources/profile.jpg";

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
					<img className="profilePicture" src={profile} />
				<div className="homeText">
					<h2>Trevor Seibel<div className="headerBox" /></h2>
					<p>
						Currently employed as an Architectural Restoration
						Technician, Trevor gained interest in programming and
						quickly developed a deep interest in the craft. starting
						in August of 2017, Trevor has been honing his skills
						with the intent of seeing what the tech industry has to
						offer.
					</p>
					<p>
						Although seemingly worlds apart, carpentry and coding
						share many skill sets. Problem solving, minimization of
						superfluous actions, minimization of resource use, and
						focus on product delivery have all been assets in
						Trevor's development.
					</p>
					<p>
						This is where Trevor is going to put his current goals, and 
						it would be a pretty huge bungle if he didn't remove this text
						before running the build.
						</p>
				</div>
			</div>
		);
	}
}
