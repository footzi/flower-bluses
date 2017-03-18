import React from 'react';
import $ from "jquery";

let Contacts = React.createClass({
	ComponentDidMount () {
				var myform = $("form#contactsform");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "mail_ru";

  var template_id = "about";
  myform.find("#contactsform-button").text("Sending...");
  emailjs.send(service_id,template_id,params)
  	.then(function(){ 
       alert("Sent!");
       myform.find("#contactsform-button").text("Send");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("#contactsform-button").text("Send");
    });
  return false;
});
	},
	render () {
		document.getElementById("footer").style.marginTop="76.2%";
		return (
			
			<div className="contacts">
				<h1 className="main-title">Контакты</h1>
				<div className="contacts-form">
					<form id="contactsform">
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
							<button id="contactsform-button" className="contacts-form-button-send">Отправить</button>
						
					</form>
				</div>
			</div>)
	}
});

export default Contacts;