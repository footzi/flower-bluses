import React from 'react';

let Contacts = React.createClass({
	componentDidMount () {
		(function(){
                emailjs.init("user_jmnF1YC49paVFwkbJRipP");
            })();

            var orderform = $("#aboutform");
            orderform.submit(function(event){
                event.preventDefault();

            // Change to your service ID, or keep using the default service
            var service_id = "mail_ru";
            var template_id = "about";

            orderform.find("#aboutform-button").text("Отправляется...");
            emailjs.sendForm(service_id,template_id,"orderform")
                .then(function(){ 
                    console.log("Sent!");
                orderform.find("#aboutform-button").text("Отправлено");
                }, function(err) {
                console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                orderform.find("#aboutform-button").text("Oшибка");
                });
            return false;
		});
		
		window.scrollTo(0, 0)
		$(function(){
                $(window).resize(function(){
                    if($(window).width()<=640) {
                        $("body").css({"background-image":"none"})
                        $("body").css({"background-image":"url(/images/fon2.jpg)"})

                    } else {
                        $("body").css({"background-image":"url(/images/fon.jpg)"});
						$("#footer").css({"margin-top":"76.1%"});
                    }
                }).resize()
            })

		 
        
      
	},
	render () {
		
		return (
			
			<div className="contacts">
				<h1 className="main-title">Контакты</h1>
				<div className="contacts-form">
					<form id="aboutform" method="post">
						<div className="contacts-form-adress">
							<label>Ваше имя:</label>
							<input className="contacts-form-input" name="name" type="text" required/>
							<label>Ваш e-mail:</label>
							<input className="contacts-form-input contacts-form-input-email" name="email" type="email" required/>
						<div className="contacts-form-message-mobile">
							<label>Ваше сообщение:</label>
							<textarea className="contacts-form-message-textarea" name="message" type="text" required></textarea>
						</div>
						<div>
								<h2>ГОРОД:</h2>
								<h3>Нижний Новгород</h3>
							</div>
							<div>
								<h2>ТЕЛЕФОН:</h2>
								<h3>+7(903)848-26-61</h3>
							</div>
								<h2>E-MAIL:</h2>
								<h3>galina.agafonova.2013@mail.ru</h3>
							<div>
							</div>
						</div>
						<div className="contacts-form-message">
							<label>Ваше сообщение:</label>
							<textarea className="contacts-form-message-textarea" name="message" type="text" required></textarea>
						</div>
							<button id="aboutform-button" className="contacts-form-button-send">Отправить</button>
						
					</form>
				</div>
			</div>)
	}
});

export default Contacts;