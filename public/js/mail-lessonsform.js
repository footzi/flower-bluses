(function(){
      emailjs.init("user_jmnF1YC49paVFwkbJRipP");
   })();

var orderform = $("#lessonsform");
orderform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "mail_ru";
  var template_id = "lessons";

  orderform.find("#lessonsform-button").text("Отправляется...");
  emailjs.sendForm(service_id,template_id,"lessonsform")
  	.then(function(){ 
    	console.log("Sent!");
       orderform.find("#lessonsform-button").text("Отправлено");
    }, function(err) {
       console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       orderform.find("#lessonsform-button").text("Oшибка");
    });
  return false;
});