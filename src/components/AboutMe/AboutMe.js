import './aboutMe.scss'
import React from 'react'
import MyImg from '../../images/avatar.jpg'
import MyData from './MyData'

const AboutMe = () => {
	return (
		<section className="section__title" id="about">
			<div className="about container">
				<div className="about__box">
					<MyData />
				</div>
				<div className="about__photo">
					<img src={MyImg} className="about__photo--avatar" alt="avatar Krzysztofa Bartkiewicza" />
				</div>
			</div>
		 </section>
	)
}

export default AboutMe
