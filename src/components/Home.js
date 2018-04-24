import React, { Component } from "react";



export default class Home extends Component {
	constructor(props) {
		super(props);

	}
	

	render() {
		
		//webpack was not accepting local images on build if their addresses were passed from props
		//this fix works for my needs, but another solution would be necessary should the images be user-specific
		const profilePic = process.env.PUBLIC_URL + this.props.home.image;

				return (
			<div className="Home">
				<img className="profilePicture" src={profilePic} />
				<div className="homeText">
					<h2>
						{this.props.home.name}<div className="headerBox" />
					</h2>
					<h3>{this.props.home.description}</h3>					
				</div>
			</div>
		);
	}
}

