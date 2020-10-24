$(document).ready(function() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var address = document.getElementById("address");
  var product = document.getElementById("product");
  var quantity = document.getElementById("quantity");
  var regex = ",";
  
  $('#submit').click(function(event) {
    event.preventDefault();
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();
    var order = date + regex;
    order += email.value + regex;
    order += address.value + regex;
    order += product.value + regex;
    order += quantity.value;
    
    var service_id = 'customer+orders';
    var template_id = 'template_mxp9zmg';
    var template_params = { message: order };
    emailjs.send(service_id,template_id,template_params);
	
	
  });
});
