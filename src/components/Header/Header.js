import './header.scss'
import { NavMenu } from './NavMenu'
import React, { useState } from 'react'

const Header = () => {
	const [clicked, setClicked] = useState(false)
	const [color, setColor] = useState(false)

	const handleClick = () => setClicked(!clicked)
	const changeColor = () => {
		window.scrollY >= 100 ? setColor(true) : setColor(false)
	}

	window.addEventListener('scroll', changeColor)

	return (
		<nav className='nav'>
			<div className={color ? 'nav__container container nav__background' : 'nav__container container'}>
				<a href="index.html" className="nav__logo">
					Portfolio
					<i class="fa-solid fa-house"></i>
				</a>
				<div className="nav__burger" onClick={handleClick}>
					{clicked ? <i class="fa-solid fa-times"></i> : <i className="fas fa-bars"></i>}
				</div>
				<ul className={clicked ? 'nav__list active' : 'nav__list'}>
					{NavMenu.map(item => {
						return (
							<li key={item.id}>
								<a href={item.url} className={item.nameClass}>
									<i className={item.icon}></i>
									{item.title}
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}

export default Header
