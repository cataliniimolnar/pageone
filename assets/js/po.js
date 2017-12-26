$(document).ready(function(){
	closeTrailer();
	
});

function closeTrailer() {
	$('.trailer').click(function(){
		$('.trframe').remove();
		$('.trailer').addClass('off');
	});
	}
function bodyFadeIn() {
	$('body').animate({opacity: 1}, 1500);
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