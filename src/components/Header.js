import React, { Component } from "react";
import PictureCard from "./PictureCard.js";
import TitleCard from "./TitleCard.js";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
	render() {
		return (
			<div className="Header">
						<NavLink
							activeClassName="activeLink"
							className="link"
							exact={true}
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="activeLink"
							className="link"
							to="/About"
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="activeLink"
							className="link"
							to="/Skills"
						>
							Skills
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="activeLink"
							className="link"
							to="/Projects"
						>
							Projects
						</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName="activeLink"
							className="link"
							to="/Contact"
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		);
	}
}
