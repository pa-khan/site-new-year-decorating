$(document).ready(function($) {

	/* Phone mask */
	$('.input_phone').mask('+7 (999) 999-99-99');
	
	$('.reviews__list').slick();

	$(".panel__nav a").click(function (event) {
		var id  = $(this).attr('href');
		if(id.charAt(0) == '#'){
			event.preventDefault();
			var top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);
		}
	});
});