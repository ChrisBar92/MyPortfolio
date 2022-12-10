import './header.scss'
import React from 'react'
import BackgroundImg from '../../images/hero-image-1920.jpg'

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
					<a href="#projects">Projekty</a>
				</button>
				<button className="btn btn--transparent">
					<a href="#contact">Kontakt</a>
				</button>
			</div>
		</header>
	)
}

export default Header
