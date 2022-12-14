import './projects.scss'

import { Link } from 'react-scroll'
import React, { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

const ProjectsCard = props => {
	// hook wykorzystywany do pojawienia się jednorazowego danej animacji
	useEffect(() => {
		Aos.init({ duration: 2000, once: true })
	}, [])

	return (
		<div data-aos="fade-up"  className="projects__card">
			<img src={props.imgsrc} alt={props.altsrc} />
			<h2 className="projects__card--heading">{props.heading}</h2>
			<div className="projects__card--details">
				<p className="projects__card--details--text">{props.text}</p>
				<button className="projects__card--details--btn btn">
					<Link activeClass="active" className="projects__details--link" to="about" offset={-80} duration={300}>
						Zobacz
					</Link>
				</button>
			</div>
		</div>
	)
}

export default ProjectsCard
