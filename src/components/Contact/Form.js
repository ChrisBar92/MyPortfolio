import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Form = () => {
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs.sendForm('service_46nhgyf', 'template_ea2bonv', form.current, '1HdLWcjojDWqmgTtT')
		// funkcja poniżej czyści formularz po kliknieciu submita
		e.target.reset()
	}

	return (
		<div className="form">
			<p className="form__header">Formularz kontaktowy</p>

			<form ref={form} onSubmit={sendEmail}>
				<label >Imię i nazwisko:</label>
				<input type="text" name="name" required placeholder="Wpisz swoje imię i nazwisko" />
				<label >Adres e-mail:</label>
				<input type="email" name="email" required placeholder="Wpisz swój adres e-mail" />
				<label >Treść wiadomości:</label>
				<textarea name="message" id="message" placeholder="Treść wiadomości"></textarea>
				<button className="form__btn btn" type="submit" name="submit">
					Wyślij
				</button>
			</form>
		</div>
	)
}

export default Form
