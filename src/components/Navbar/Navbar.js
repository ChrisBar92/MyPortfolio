import './navbar.scss'
import React, { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
	// klikanie w menu hamburgerowe
	const [clickedBurger, setClickedBurger] = useState(false)
	// zmiana koloru na navbarze przy scrollowaniu
	const [color, setColor] = useState('nav__container container')

	// setClicked przyjmuje wartość logiczną inną niż clicked
	const handleClick = () => setClickedBurger(!clickedBurger)
	const changeColor = () => {
		window.scrollY >= 100 ? setColor('nav__container container nav__background') : setColor('nav__container container')
	}

	window.addEventListener('scroll', changeColor)

	return (
		<nav className="nav" id="home">
			<div className={color}>
				<div className="nav__logo">KB Portfolio</div>
				<div className="nav__burger" onClick={handleClick}>
					{clickedBurger ? <i className="fa-solid fa-times"></i> : <i className="fas fa-bars"></i>}
				</div>
				<ul className={clickedBurger ? 'nav__list active' : 'nav__list'}>
					<li className={'nav__item'}>
						<Link
							activeClass="active"
							onClick={handleClick}
							className="nav__link"
							to="about"
							offset={-100}
							duration={300}>
							<i className="fa-solid fa-circle-info"></i>O mnie
						</Link>
					</li>
					<li className="nav__item">
						<Link
							activeClass="active"
							onClick={handleClick}
							className="nav__link"
							to="projects"
							offset={-100}
							duration={300}>
							<i className="fa-solid fa-briefcase"></i>Projekty
						</Link>
					</li>
					<li className="nav__item">
						<Link
							activeClass="active"
							onClick={handleClick}
							className="nav__link"
							to="contact"
							offset={-100}
							duration={300}>
							<i className="fa-regular fa-address-card"></i>Kontakt
						</Link>
					</li>
				</ul>
				<ul className="nav__list--desktop">
					<li className={'nav__item'}>
						<Link activeClass="active" className="nav__link" to="about" offset={-100} duration={300}>
							<i className="fa-solid fa-circle-info"></i>O mnie
						</Link>
					</li>
					<li className="nav__item">
						<Link activeClass="active" className="nav__link" to="projects" offset={-100} duration={300}>
							<i className="fa-solid fa-briefcase"></i>Projekty
						</Link>
					</li>
					<li className="nav__item">
						<Link activeClass="active" className="nav__link" to="contact" offset={-100} duration={300}>
							<i className="fa-regular fa-address-card"></i>Kontakt
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
