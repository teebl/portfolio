import React, { Component } from "react";

export default class About extends Component {
	render() {
		return (
			<div className="About">
				<h2>About</h2>
				<p>
					In August of 2017 Trevor began his journey into web
					development. The passion for building websites grew, and a
					few online courses quickly turned into more and more
					elaborate projects and late evenings coding, Now, Trevor is
					studying full-time with the intent to build a career in the
					tech world.
				</p>
				<p>
					Before the career change, Trevor was employed restoring
					historical building around Canada's capital, making use of
					his college education as a heritage woodworker. Although
					seemingly worlds apart, woodworking and coding share many
					skill sets. Problem solving, effective utilization of
					resources, and focus on product delivery have all been
					assets across the two disciplines.
				</p>

				<p>
					{" "}
					Trevor mainly works in JavaScript, namely React.js, but has
					been known to code in C. You can expect him to easily handle
					most HTML and CSS tasks. He'd probably use Sass, Redux and
					Gulp to build a big project, but he's not picky. He's also
					got a good handle on RESTful API's, and back in the day he
					used Bootstrap quite a bit. If you're thinking 'would Trevor
					be good at learning <i>this</i> particular tool?' the answer is
					always Yes.
				</p>
			</div>
		);
	}
}
