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
	$('main').animate({opacity: 1}, 1500);
	$('.maincanvas').animate({opacity: 1}, 2500);
	$('.intro').addClass('show');
	$('.spinner').remove();
	}

function Movies(){
	$('section').removeClass('show');
	$('.movies').addClass('show');
	}
function Home(){
	$('section').removeClass('show');
	$('.intro').addClass('show');
	}

function quoteFadeIn() {
	$('.intro_quote').animate({opacity: 1}, 1500);
	}

function mainCanvasFadeIn() {
	$('.maincanvas').animate({opacity: 1}, 2500);
	}

function pageDoneLoading() {
	$('.spinner').remove();
	}