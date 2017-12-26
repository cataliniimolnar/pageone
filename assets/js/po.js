$(document).ready(function(){
	bodyFadeIn();
	


});

function bodyFadeIn() {
	$('body').animate({opacity: 1}, 500);
	$('.intro').addClass('show');
	}
function Movies(){
	$('section').removeClass('show');
	$('.movies').addClass('show');
	}
function Home(){
	$('section').removeClass('show');
	$('.intro').addClass('show');
	}