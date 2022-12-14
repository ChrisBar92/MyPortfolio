import './projects.scss'

import React from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectsData from './ProjectsData'

const Projects = () => {
	return (
		<section className="projects container" id="projects">
			<div className="projects__box">
				{ProjectsData.map((item, index) => {
					return (
						<ProjectsCard
							key={index}
							imgsrc={item.imgsrc}
							altsrc={item.altsrc}
							heading={item.heading}
							text={item.text}
						/>
					)
				})}
			</div>
			<div className="section__title">Projekty</div>
		</section>
	)
}

export default Projects
