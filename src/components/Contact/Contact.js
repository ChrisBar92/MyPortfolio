import React from 'react'
import './contact.scss'
import ContactCard from './ContactCard'
import SocialData from './SocialData'
import Form from './Form'



const Contact = () => {
	
	return (
		<section className="contact" id="contact">
			<div className="contact__box">
				<div className="contact__box--social">
					{SocialData.map((item, index) => {
						return <ContactCard key={index} icon={item.icon} title={item.title} user={item.user} url={item.url} />
					})}
				</div>
				<Form />
			</div>
			<div className="section__title">Kontakt</div>
		</section>
	)
}

export default Contact
