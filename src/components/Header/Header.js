import './header.scss'
import React from 'react'
import BackgroundImg from '../../images/hero-image-1920.jpg'
import { Link } from 'react-scroll'

const Header = () => {
	return (
		<header className="header">
			<div className="header__image">
				<img
					className="header__shadow--img"
					src={BackgroundImg}
					alt="zaciemnione zdjęcie na całym ekranie monitora pokazujące programującą osobę"
				/>
			</div>
			<div className="header__content">
				<p>Witaj na mojej stronie, jestem</p>
				<h1>frontend developerem</h1>
				<button className="btn">
					<Link activeClass="active" to="projects" offset={-80} duration={300}>
						Projekty
					</Link>
				</button>
				<button className="btn btn--transparent">
					<Link activeClass="active" to="contact" offset={-80} duration={300}>
						Kontakt
					</Link>
				</button>
			</div>
		</header>
	)
}

export default Header
