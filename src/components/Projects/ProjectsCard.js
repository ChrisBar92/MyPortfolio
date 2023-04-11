import './projects.scss'
import { AiFillGithub } from 'react-icons/ai'

// import { Link } from 'react-scroll'
import React, { useState } from 'react'

const ProjectsCard = props => {
	return (
		<div data-aos="fade-up" data-aos-duration="3000" data-aos-once="false" className="projects__card">
			<div className="projects__card-photo">
				<img src={props.imgsrc} alt={props.altsrc} />
			</div>
			<h3 className="projects__card-heading">{props.heading}</h3>
			<div className="projects__card-details">
				<p className="projects__card-details-text">{props.text}</p>
				<div className="projects__card-details-links">
					<a href={props.link} target="_blank" className="projects__card-details-link">
						Zobacz
					</a>
					<a href={props.git} target="_blank" className="projects__card-details-link">
						Kod: <AiFillGithub className="icon" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectsCard
