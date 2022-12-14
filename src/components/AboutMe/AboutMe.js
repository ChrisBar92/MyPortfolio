import './aboutMe.scss'
import React, { useEffect } from 'react'
import MyImg from '../../images/avatar.jpg'
import MyData from './MyData'

import Aos from 'aos'
import 'aos/dist/aos.css'

const AboutMe = () => {

	// hook wykorzystywany do pojawienia się jednorazowego danej animacji
	useEffect(() => {
		Aos.init({ duration: 2000, once: true })
	}, [])

	return (
		<section className="about container" id="about">
			<div className="about__box">
				<MyData />
			</div>
			<div data-aos="flip-up" className="about__photo">
				<img src={MyImg} className="about__photo--avatar" alt="avatar Krzysztofa Bartkiewicza" />
			</div>
			<div className="section__title">O mnie</div>
		</section>
	)
}

export default AboutMe
