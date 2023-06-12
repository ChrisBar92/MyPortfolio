import './aboutMe.scss'
import React, { useEffect } from 'react'
import MyImg from '../../images/avatar.jpg'

import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiSass } from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { IoLogoNpm } from 'react-icons/io'

import { Link } from 'react-scroll'

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
				<div data-aos="flip-up" className="about__photo">
					<img src={MyImg} className="about__photo--avatar" alt="avatar Krzysztofa Bartkiewicza" />
				</div>
				<div data-aos="zoom-in" data-aos-delay="1000" className="about__box-description">
					Jestem kreatywnym, początkującym frontend developerem, który pasjonuje się tworzeniem aplikacji i stron
					internetowych oraz ogólnie pojętym frontendem. Rozwijam swoje umiejętności w czystym JS, a także we frameworku
					React, piszę kod zachowując metodologię BEM z użyciem preprocesora Sass. Potrafię również stworzyć prostą
					stronę przy użyciu Bootstrapa. Dotychczasowe projekty i progres w pisaniu kodu są dla mnie olbrzymią motywacją
					do dalszej nauki i rozwiązywania kolejnych napotykanych problemów. W najbliższym czasie chcę poznać także
					TypeScript niezbędny do pracy jako Front End Developer. Poniżej przedstawiam technologie oraz narzędzia, w
					których korzystaniu mam opanowane mocne podstawy:
				</div>
			</div>
			<div data-aos="zoom-in" data-aos-delay="1500" className="about__box-technologies">
				<div className="technologies-container">
					<p>
						<AiFillHtml5 className="icon" />
						HTML
					</p>
					<p>
						<DiCss3 className="icon" />
						CSS
					</p>
					<p>
						<DiSass className="icon" />
						Sass
					</p>
					<p>
						<BsFillBootstrapFill className="icon" />
						Bootstrap
					</p>
				</div>
				<div className="technologies-container">
					<p>
						<SiJavascript className="icon" />
						JavaScript
					</p>
					<p>
						<FaReact className="icon" />
						React
					</p>
					<p>
						<IoLogoNpm className="icon" />
						NPM
					</p>
					<p>
						<AiFillGithub className="icon" />
						Github
					</p>
				</div>
			</div>
			<button data-aos="zoom-in" data-aos-offset="-100" data-aos-delay="2000" className="about__btn btn">
				<Link activeClass="active" to="contact" offset={-100} duration={300}>
					Zapytaj mnie
				</Link>
			</button>
			<div className="section__title">O mnie</div>
		</section>
	)
}

export default AboutMe
