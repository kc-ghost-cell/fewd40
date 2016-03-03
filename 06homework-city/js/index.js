// The ready event occurs when the DOM has been loaded
$(document).ready(function(){
	
	//On open, prevent reload of the page
	$('#submit-btn').click(function(event) {
  		event.preventDefault();
  		update();
	});

	// Define arrays for cities
	var cities = ['NYC','SF','LA','ATX','SYD']

	// Create the dropdown list
	function addToList() {
		for (var i = 0; i < cities.length; i++) { //loop through array and add to the drop down
			$('select').append('<option>'+cities[i]+'</option>')
			$( "select" ).attr( 'class', 'dropdownList');
		};
	};
	addToList();

	//When the user changes the input of the drop-down, update the background image
	$("select").change(function(){ // Detect change in selection
		var city = $('.dropdownList').val(); //capture user selected value
		var cityLowercase = city.toLowerCase();
		var imageLink = 'images/'+cityLowercase+'.jpg'
	
		if(cityLowercase=='select a city') {
			$('body').attr('style','background-image:url(images/citipix_skyline.jpg)');
		} else {
			$('body').css('background-image','url('+imageLink+')'); // Make URL link correspond to city
			};
	});
});

