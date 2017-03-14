import React from 'react';

let Contacts = React.createClass({
	ComponentDidMount () {
					(function(){
			emailjs.init("user_jmnF1YC49paVFwkbJRipP");
		})();

		var orderform = $("#contactsform");
		orderform.submit(function(event){
			event.preventDefault();

		// Change to your service ID, or keep using the default service
		var service_id = "mail_ru";
		var template_id = "about";

		orderform.find("#contactsform-button").text("Отправляется...");
		emailjs.sendForm(service_id,template_id,"contactsform")
			.then(function(){ 
				console.log("Sent!");
			orderform.find("#contactsform-button").text("Отправлено");
			}, function(err) {
			console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
			orderform.find("#contactsform-button").text("Oшибка");
			});
		return false;
		});
	},
	render () {
		return (
			
			<div className="contacts">
				<h1 className="main-title">Контакты</h1>
				<div className="contacts-form">
					<form id="contactsform" method="post">
						<div className="contacts-form-adress">
							<label>Ваше имя:</label>
							<input className="contacts-form-input" name="name" type="text" required/>
							<label>Ваш e-mail:</label>
							<input className="contacts-form-input contacts-form-input-email" name="email" type="email" required/>
							<div>
								<h2>ГОРОД:</h2>
								<h3>Нижний Новгород</h3>
							</div>
							<div>
								<h2>ТЕЛЕФОН:</h2>
								<h3>+7(953)173-32-96</h3>
							</div>
								<h2>E-MAIL:</h2>
								<h3>footzi@mail.ru</h3>
							<div>
								
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