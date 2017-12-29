$(document).ready(function(){
	showHome();
	closeTrailer();




});
function showHome(){
	$('.section').removeClass('visible');
	$('.home').addClass('visible');
	}
function showMovies(){
	$('.section').removeClass('visible');
	$('.movies').addClass('visible');
	}
function showGames(){
	$('.section').removeClass('visible');
	$('.games').addClass('visible');
	}
function showContact(){
	$('.section').removeClass('visible');
	$('.contact').addClass('visible');
	}
function showHideQuote() {
	setTimeout(function(){ 
		$('.quote').addClass('q_show');
	 }, 5000);
	 setTimeout(function(){ 
		$('.quote').removeClass('q_show');
	 }, 25000);
	}


function closeTrailer() {
	$('.trailer').click(function(){
		$('.trframe').remove();
		$('.trailer').addClass('off');
	});
	}