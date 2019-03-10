import React, { Component } from "react";

export default class NextProfileButton extends Component {
	constructor(props) {
		super(props);

		this.buttonPressHandler = this.buttonPressHandler.bind(this);
	}

	buttonPressHandler(e) {
		this.props.buttonPress();
	}

	render() {
		const profileClassName = this.props.profileClassName;
		console.log(profileClassName);
		return (
			<div
				className={profileClassName + " nextProfileButton"}
				onClick={this.buttonPressHandler}
			>
				<div className={profileClassName + " square"} />HULKAMANIA
			</div>
		);
	}
}
