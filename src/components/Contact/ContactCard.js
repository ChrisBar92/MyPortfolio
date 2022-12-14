import './contact.scss'

import React from 'react'

const ContactCard = props => {
	return (
		<div className="social__card">
			<div className="icon">{props.icon}</div>
			<div className="social__card--title">{props.title}</div>
			<p className="social__card--user">{props.user}</p>
			<button className="social__card--btn btn">
				<a href={props.url} className="social__card--btn-link" target="_blank" rel="noreferrer">
					Skontaktuj się
				</a>
			</button>
		</div>
	)
}

export default ContactCard
