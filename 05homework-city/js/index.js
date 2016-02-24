// The ready event occurs when the DOM has been loaded
$(document).ready(function(){
	
	//On open, prevent reload of the page
	$('#submit-btn').click(function(event) {
  		event.preventDefault();
  		update();
	});

	function update() {
		var city = $('#city-type').val();
		var cityLowercase = city.toLowerCase();

		if (cityLowercase=='nyc'||cityLowercase=='new york'||cityLowercase=='new york city') {
			$('body').attr('style','background-image:url(images/nyc.jpg)');//or $('body').css('background-image','url(images/nyc.jpg)');
		} else if (cityLowercase=='san francisco'||cityLowercase=='sf'||cityLowercase=='bay area') {
			$('body').attr('style','background-image:url(images/sf.jpg)');
		} else if (cityLowercase=='los angeles'||cityLowercase=='la'||cityLowercase=='lax') {
			$('body').attr('style','background-image:url(images/la.jpg)');
		} else if (cityLowercase=='austin'||cityLowercase=='atx') {
			$('body').attr('style','background-image:url(images/austin.jpg)');
		} else if (cityLowercase=='sydney'||cityLowercase=='syd') {
			$('body').attr('style','background-image:url(images/sydney.jpg)');
		} else {
			$('body').attr('style','background-image:url(images/citipix_skyline.jpg)');
		}

		$('#city-type').val(''); //Clear box
		
	};

});



//Pseudocode
///////////////////////////////
// If (user submits: "New York" or "New York City" or "NYC") {
// 	make the background of the page nyc.jpg
// } else if (user submits: "San Francisco" or "SF" or "Bay Area") {
// 	make the background of the page sf.jpg
// } else if (user submits: "Los Angeles" or "LA" or "LAX") {
// 	make the background of the page la.jpg
// } else if (user submits: "Austin" or "ATX") {
// 	make the background of the page austin.jpg
// } else if (user submits: "Sydney" or "SYD") {
// 	make the background of the page sydney.jpg
// } else {revert to orginal image}
