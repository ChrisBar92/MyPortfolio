import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiSass } from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-scroll'

const MyData = () => {
	return (
		<>
			<div data-aos="zoom-in" data-aos-delay="1000" className="about__box-name">
				Krzysztof Bartkiewicz<i className="fa-solid fa-hand"></i>
			</div>

			<p data-aos="zoom-in" data-aos-delay="1500" className="about__box-title">
				Frontend Developer
			</p>
			<div data-aos="zoom-in" data-aos-delay="2000" className="about__box-description">
				Jestem kreatywnym, początkującym frontend developerem, który pasjonuje się tworzeniem aplikacji i stron internetowych oraz ogólnie pojętym frontendem. Rozwijam swoje umiejętności w czystym JS, a także we frameworku React, piszę kod w metodologii BEM z użyciem preprocesora Sass. Potrafię również stworzyć prostą stronę przy użyciu Bootstrapa. Dotychczasowe projekty i progres w pisaniu kodu jest dla mnie olbrzymią motywacją do dalszej nauki i rozwiązywania kolejnych napotykanych problemów. Poniżej przedstawiam technologię, w których mam opanowane mocne podstawy:
			</div>
			<div data-aos="zoom-in" data-aos-delay="2500" className="about__box-technologies">
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
						<SiTypescript className="icon" />
						Typescript
					</p>
					<p>
						<AiFillGithub className="icon" />
						Github
					</p>
				</div>
			</div>
			<button data-aos="zoom-in" data-aos-offset="-100" data-aos-delay="3000" className="about__box--btn btn">
				<Link activeClass="active" to="contact" offset={-80} duration={300}>
					Zapytaj mnie
				</Link>
			</button>
		</>
	)
}

export default MyData
