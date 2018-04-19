import React, { Component } from 'react';
import AboutCard from './AboutCard';
import Card from './Card';

export default class Body extends Component {
	render() {
		return (
			<div className="Body">
			<Card />
			<Card /><Card /><Card />
			<AboutCard />
			<Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card /><Card />
			</div>
		)
	}
} 