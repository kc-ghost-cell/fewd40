// The ready event occurs when the DOM has been loaded
$(document).ready(function(){

	//On open
	$( "button" ).click(function(event) {
	  		event.preventDefault();
		});

	$('.hiddensection').hide();
	$('.navread.2').hide();
	$('span').hide();

	// Section 1
	$('.navread.1.more1').click(function() {
		$('.hiddensection.1').slideDown();
		$('.navread.1.more1').hide();
		$('.navread.2.less1').show();
	});

	$('.navread.2.less1').click(function() {
		$('.hiddensection.1').slideUp();
		$('.navread.1.more1').show();
		$('.navread.2.less1').hide();
	});

	// Section 2
	$('.navread.1.more2').click(function() {
		$('.hiddensection.2').slideDown();
		$('.navread.1.more2').hide();
		$('.navread.2.less2').show();
	});

	$('.navread.2.less2').click(function() {
		$('.hiddensection.2').slideUp();
		$('.navread.1.more2').show();
		$('.navread.2.less2').hide();
	});

	// Aside
	$('#navlearn').click(function() {
		$('span').slideDown();
		$('#navlearn').hide();
	});

});
