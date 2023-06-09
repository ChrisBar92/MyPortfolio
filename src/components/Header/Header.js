import './header.scss'
import React from 'react'
import BackgroundImg from '../../images/hero-image.jpg'
import { Link } from 'react-scroll'

const Header = () => {
	return (
		<header className="header">
			<div className="header__background">
				<img
					className="header__image"
					src={BackgroundImg}
					alt="zaciemnione zdjęcie na całym ekranie monitora pokazujące programującą osobę"
				/>
			</div>
			<div className="header__content">
				<p className='header__text'>Witaj na mojej stronie, jestem początkującym</p>
				<h1 className='header__title'>frontend developerem</h1>
				<button className="btn">
					<Link activeClass="active" to="projects" offset={-100} duration={300}>
						Projekty
					</Link>
				</button>
				<button className="btn btn--transparent">
					<Link activeClass="active" to="contact" offset={-100} duration={300}>
						Kontakt
					</Link>
				</button>
			</div>
		</header>
	)
}

export default Header
