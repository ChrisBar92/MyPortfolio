import './heroImage.scss'
import React from 'react'
import BackgroundImg from '../images/hero-image-1920.jpg'

const HeroImage = () => {
	return (
		<div className="header">
			<div className="hero-background">
				<img className="into-img" src={BackgroundImg} alt="opis" />
			</div>
			<div className="content">
				<p>Witaj na mojej stronie, jestem</p>
				<h1>frontend developerem</h1>
				<a href="#" className="btn">
					Projects
				</a>
				<a href="#" className="btn btn--transparent">
					Projects
				</a>
			</div>
		</div>
	)
}

export default HeroImage
