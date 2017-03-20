import $ from "jquery";

//работа кнопки 
$(".nav-mobile-button").click(function() {
    if ($(".nav-mobile-menu").css("display")=="none") {
        $(".nav-mobile-menu").css("display","block")
    } else 
        $(".nav-mobile-menu").css("display","none")
});

// отправка почты
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

//cлайдер на главной странице
$(document).ready(function(){
  $('.bxslider').bxSlider({
    auto:true,
     moveSlides: 1,
    minSlides: 4,
  maxSlides: 4,
  slideWidth: 360,
  slideMargin: 13
  })  
});
   
//jivosite
// (function(){ var widget_id = 'WeuwmmB6yg';var d=document;var w=window;function l(){
// var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/'+widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);}if(d.readyState=='complete'){l();}else{if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

//яндекс метрика


    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter43578919 = new Ya.Metrika({
                    id:43578919,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");

<noscript><div><img src="https://mc.yandex.ru/watch/43578919" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
