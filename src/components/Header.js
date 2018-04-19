import React, { Component } from 'react';
import PictureCard from './PictureCard.js';
import TitleCard from './TitleCard.js';
import NavCard from './NavCard.js'


export default class Header extends Component {
	render() {
		return(
		<div className="Header">
			<PictureCard />
			<TitleCard />
			<NavCard />
		</div>
		)
	}
}