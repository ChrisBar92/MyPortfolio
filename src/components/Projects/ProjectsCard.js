import './projects.scss'

// import { Link } from 'react-scroll'
import React, { useState } from 'react'

const ProjectsCard = props => {
	return (
		<div data-aos="fade-up" data-aos-duration="3000" data-aos-once="false" className="projects__card">
			<img src={props.imgsrc} alt={props.altsrc} />
			<h2 className="projects__card--heading">{props.heading}</h2>
			<div className="projects__card--details">
				<p className="projects__card--details--text">{props.text}</p>
				<button className="projects__card--details--btn btn">Zobacz</button>
			</div>
		</div>
	)
}

export default ProjectsCard
