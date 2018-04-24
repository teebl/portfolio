const state = {
	currentProfileIndex: 0,
	profiles: {
		trevor: {
			home: {
				image: '/images/profile.jpg',
				name: "Trevor Seibel",
				description: "Front-end Web Developer, residing in Ottawa"
			},

			about: {
				text: [
					"In August of 2017 Trevor began his journey into web development. The passion for building websites grew, and a few online courses quickly turned into more and more elaborate projects and late evenings coding, Now, Trevor is studying full-time with the intent to build a career in the tech world.",
					"Before the career change, Trevor was employed restoring historical building around Canada's capital, making use of his college education as a heritage woodworker. Although seemingly worlds apart, woodworking and coding share many skill sets. Problem solving, effective utilization of resources, and focus on product delivery have all been assets across the two disciplines.",
					"Trevor mainly works in JavaScript, namely React.js, but has been known to code in C. You can expect him to easily handle most HTML and CSS tasks. He'd probably use Sass, Redux and Gulp to build a big project, but he's not picky. He's also got a good handle on RESTful API's, and before he devoted his efforts to SPA's he used Bootstrap and jQuery quite a bit. If you're thinking 'would Trevor be good at learning <i>this</i> particular tool?' the answer is always Yes."
				]
			},
			projects: {
				sample: {
					thumbnail: "",
					title: "Project Title",
					summary: "A quick summary",
					body: [
						"Here is the body, there may be a bit of text in here but then again who knows? I might have a lot to say about a project, and what I learned. These things take a lot of work, after all, and I learn a lot.",
						"There could be a second paragraph if I really want to get into the details. I think I would be stretching the user's patience though. Brevity and all that."
					]
				}
			},
			contact: {
				contactMethod: {
					icon: "",
					link: ""
				}
			},
			buttonText: "boring"
		}
	}
};

export default state;
