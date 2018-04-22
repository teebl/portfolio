import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import profile from "../resources/profile.jpg";

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<img className="profilePicture" src={profile} />
				<div className="homeText">
					<h2>
						Trevor Seibel<div className="headerBox" />
					</h2>
					<h3>Front-end Web Developer, residing in Ottawa</h3>					
				</div>
			</div>
		);
	}
}
