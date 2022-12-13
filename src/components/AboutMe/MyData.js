import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { DiSass } from 'react-icons/di'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiWebpack } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'

const MyData = () => {
	return (
		<>
			<h1 className="about__box--name">
				Krzysztof Bartkiewicz<i class="fa-solid fa-hand"></i>
			</h1>

			<p className="about__box--title">Frontend Developer</p>
			<div className="about__box--description">
				Jestem kreatywnym frontend developerem pasjonujący się i rozwijający swoje umiejętności oraz wiedzę w
				następujących technologiach:
			</div>
			<div className="about__box--technologies">
				<div className="technologies--container">
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
				<div className="technologies--container">
					<p>
						<SiJavascript className="icon" />
						JavaScript
					</p>
					<p>
						<FaReact className="icon" />
						React
					</p>
					<p>
						<SiWebpack className="icon" />
						Webpack
					</p>
					<p>
						<AiFillGithub className="icon" />
						Github
					</p>
				</div>
			</div>
			<button className="about__box--btn btn">
				<a href="#contact">Zapytaj mnie</a>
			</button>
		</>
	)
}

export default MyData
