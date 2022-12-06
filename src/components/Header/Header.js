import './header.scss'
import { NavMenu } from './NavMenu'
import React, { useState } from 'react'

const Header = () => {
	// const [clicked, setClicked] = useState(false)

	// handleClick = () => setClicked(!clicked)
	return (
		<header className="header">
			<nav className="nav container">
				<a href="index.html" className="nav__logo">
					Portfolio
					<i class="navbar__icon fa-solid fa-house"></i>
				</a>
				<div className="nav__burger">
					<i className="fas fa-bars"></i>
				</div>
				<ul className="nav__list">
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
			</nav>
		</header>
	)
}

export default Header

// <nav className="navbar">
// 	<h1 className="navbar__title">
// 		Portfolio <i class="navbar__icon fa-regular fa-circle-user"></i>
// 	</h1>
//     <ul>
//         <li>

//         </li>
//     </ul>
// </nav>
