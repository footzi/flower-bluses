import React from 'react';


let About = React.createClass({
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
        emailjs.sendForm(service_id,template_id,"aboutform")
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
                        $("body").css({"background-image":"url(/images/fon640.jpg)"})
                        $("#footer").css({"margin-top":"21%"});
                    } else {
                        $("body").css({"background-image":"url(/images/fon.jpg)"});
                        $("#footer").css({"margin-top":"11%"});
                    }
                }).resize()
            })
        
 
        
	},

	render() {
		// document.getElementById("footer").style.marginTop="3.7%"
		
		return (
			<div className="about">
				<div className="about-title">БЛАГОДАРЮ ВСЕХ, КТО ЗАШЕЛ НА МОЙ САЙТ!</div>
				<div className="about-introduction">
					<div className="about-introduction-text">
						<img className="about-introduction-marker" src="images/marker.png" />
						Вы любите цветы? Нежные изящные лепестки которых, кажется  сейчас вспорхнут бабочками… Или может быть Вы любите улавливать разные оттенки, наслаждаться цветом этих  прекрасных созданий природы…
					</div>
					<div className="about-introduction-text">
						<img className="about-introduction-marker" src="images/marker.png" />
						А,  возможно, Вы просто ищите подарок для себя или для своих любимых. Вы представляете себе нежный романтический образ феи, или лесной нимфы, или холодной снежной королевы? Тогда, Вам тоже в мой магазинчик  - выбирать понравившееся украшение. 
					</div>
					<div className="about-introduction-text">
						<img className="about-introduction-marker" src="images/marker.png" />
						Вы покорены этим видом искусства – созданием цветов из полимерных глин, реалистической флористикой и хотите научиться этому виду творчества? Тогда смело записывайтесь на мои мастер-классы, и я помогу Вам осуществить эту мечту!  
					</div>
				</div>
				<div className="about-i">
					<img className="about-i-photo" src="images/about-photo.jpg" />
					<div className="about-i-text">
					Меня зовут Агафонова Галина. Керамической флористикой я начала заниматься в 2014 году. Люблю учиться, поэтому подошла к этому вопросу серьезно, и первый опыт обучения получила в школе лепки из полимерной глины Ольги Петровой. Потом  ездила на курсы в студию Rowan Craft,  Школу лепки цветов  Bella Rosa, обучалась у Мастеров : Альбины Мишиной, Елены Королевой, Олеси Богданович, Ольги Ивановой.  Получив достаточно опыта и знаний, поняла, что дальше можно совершенствоваться самой, продолжая обучение у матушки-природы. Я создаю на заказ и просто для души самые нежные и изящные украшения и цветочные композиции, которые радуют своим весенне-летним настроением даже в самый холодный зимний день! 
					</div>
					
				</div>
				<div className="clear"></div>
				<div className="about-more">
					<p>Безумно интересно взяв любой цветок, изучив его строение, его цвет,  разобрав для этого его до мельчайших  лепестков и чашелистиков, попытаться слепить подобный…. А когда удается передать мельчайшие подробности строения и  оттенки  - цветок начинает Жить. </p>
					<p>Расскажу немного о материалах, которые я использую в своей работе:</p>
					<p>Полимерные глины используются японские: Modena, Modena Soft,Clay Craft By Deco; тайские: Modern, Bella Rosa. Эти глины позволяют тонко раскатываться,  создавать на своей поверхности  фактуру живых лепестков и листьев.  Они высыхают на воздухе без специального нагрева<br/> </p>
					<p>Необходимый цвет и оттенки цветам из полимерных глин придаются расписыванием и добавлением в глину масляных красок или пастели.<br/></p>
					<p>Для украшений я использую в основном фурнитуру гипоаллергенную, с родиевым покрытием, производства Чехии. Все цветочные композиции в украшениях покрыты влагостойким, защитным лаком. Но длительный контакт таких украшений с водой все таки не рекомендуется<br/></p>
				</div> 	
				<div className="about-form">
					<p className="about-form-title">СВЯЗАТЬСЯ СО МНОЙ:</p>
					<form id="aboutform" method="post">
						<input className="about-form-input" name="name" type="text" required placeholder="Ваше имя:" />
						<input className="about-form-input about-form-input-email" name="email" type="email" required placeholder="Ваш e-mail:" /> 
						<input className="about-form-input about-form-input-phone" name="phone" type="number" required placeholder="Ваш телефон:" /> 
						<textarea className="about-form-input about-form-input-message" name="message" type="name" required placeholder="Вашe сообщение:" /> 
						<button id="aboutform-button" className="about-info-button">Отправить</button>
					</form>
				</div>
			</div>
				)
	}
})

export default About;