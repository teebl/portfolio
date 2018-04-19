import React, { Component } from 'react';
import Card from './Card';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import {Route} from 'react-router-dom';

export default class Body extends Component {
	render() {
		return (
			<div className="Body">
			<Route exact path="/" component={Home} />
			<Route path="/About" component={About} />
			<Route path="/Skills" component={Skills} />
			<Route path="/Projects" component={Projects} />
			<Route path="/Contact" component={Contact} />
			</div>
		)
	}
} 