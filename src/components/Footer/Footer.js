import './footer.scss'

import React, { useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'
import { AiFillGithub } from 'react-icons/ai'

const Footer = props => {
	const [appear, setAppear] = useState('invisible')
	const handleScroll = () => {
		window.scrollY >= 200 ? setAppear('scrollToTop') : setAppear('invisible')
	}

	window.addEventListener('scroll', handleScroll)

	// funkcja powracająca na górę strony
	const top = () => {
		window.scrollTo(0, 0)
	}
	return (
		<section className="footer">
			<div className="footer__box">
				<div className="footer__box--sections"></div>
				<div className="footer__box--icons">
					<a href="https://www.linkedin.com/in/krzysztof-bartkiewicz-4185a3114/" target="_blank" rel="noreferrer">
						<AiFillLinkedin />
					</a>
					<a href="https://www.gmail.com" target="_blank" rel="noreferrer">
						<CgMail />
					</a>
					<a href="https://github.com/ChrisBar92" target="_blank" rel="noreferrer">
						<AiFillGithub />
					</a>
				</div>
				<p className="footer__box--text">
					<span>&copy;</span>2022, Wszystkie prawa zastrzeżone
				</p>
			</div>
			<button onClick={top} className={appear}>
				<AiOutlineArrowUp />
			</button>
		</section>
	)
}

export default Footer
