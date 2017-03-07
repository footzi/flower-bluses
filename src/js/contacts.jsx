import React from 'react';

let Contacts = React.createClass({
	render () {
		return (
			
			<div className="contacts">
				<div className="main-title">Контакты</div>
				<div className="contacts-form">
					<form id="contactsform" method="post">
						<div className="contacts-form-adress">
							<label>Ваше имя:</label>
							<input className="contacts-form-input" name="name" type="text" required/>
							<label>Ваш e-mail:</label>
							<input className="contacts-form-input" name="name" type="email" required/>
							<div>
								<h2>ГОРОД:</h2>
								<h3>Нижний Новгород</h3>
							</div>
							<div>
								<h2>E-MAIL:</h2>
								<h3>footzi@mail.ru</h3>
							</div>
							<div>
								<h2>ТЕЛЕФОН:</h2>
								<h3>+7(953)173-32-96</h3>
							</div>
						</div>
						<div className="contacts-form-message">
							<label>Ваше сообщение:</label>
							<textarea className="contacts-form-message-textarea" name="message" type="text" required></textarea>
						</div>
						<button id="contactsform-button" className="contacts-form-button">Отправить</button>
					</form>
				</div>
			</div>)
	}
});

export default Contacts;