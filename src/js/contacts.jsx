import React from 'react';

let Contacts = React.createClass({
	render () {
		return (
			<div className="contacts">
				<div className="main-title">Контакты</div>
				<div className="contacts-form">
					<form>
						<div className="contacts-form-adress">
						<label>Ваше имя:</label>
						<input type="text"/>

						<label>Ваш e-mail:</label>
						<input type="text"/>
						<div>
							<h2>ГОРОД</h2>
							<h3>Нижний Новгород</h3>
						</div>
						<div>
							<h2>E-MAIL:</h2>
							<h3>footzi@mail.ru</h3>
						</div>
						<div>
							<h2>ТЕЛЕФОН</h2>
							<h3>+7(953)173-32-96</h3>
						</div>
						</div>
						<div className="contacts-form-message">
							<label>ВАШЕ СООБЩЕНИЕ:</label>
							<textarea></textarea>
						</div>
						<button>send</button>
					</form>
				</div>
			</div>)
	}
});

export default Contacts;