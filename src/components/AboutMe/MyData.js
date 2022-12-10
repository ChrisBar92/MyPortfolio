import React from 'react'
import { Technologies } from './Technologies'

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
				<ul className="technologies--list">
					{Technologies.map((item, index)=>{
						return (
							<li key={index}>{index + 1}. {item}</li>
						)
					})}
				</ul>
			</div>
			<button className="about__box--btn btn">
				<a href="#contact">Zapytaj mnie</a>
			</button>
		</>
	)
}

export default MyData
