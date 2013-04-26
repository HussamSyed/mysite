$(document).ready(function() {
  	var name = "Hussam Syed";
	$('#myName').text(name).addClass('name');

	$('*').click(function(event) {
		event.stopPropagation();
		var target = event.currentTarget.tagName;
		alert("You selected "+target);
	});
});
