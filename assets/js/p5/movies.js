function prepMovies() {
	var mov = m_data.movies;
	for (var i = 0; i < 3; i++) {
		var n = (floor(random(mov.length)));
		var mov_a = select('#movies_section');
		var mov_b = createElement('article').addClass('movie').parent(mov_a);
		var mov_i = createImg(mov[n].poster, mov[n].title).parent(mov_b);
		var mov_c = createButton('').addClass('movie_btn').parent(mov_b).mousePressed(playTrailer);
		var mov_t = createElement('span', mov[n].trailer).addClass('movie_trailer').parent(mov_c);
		var bi = createElement('i').addClass('fab fa-youtube fa-5x').parent(mov_c);
	}
}

function playTrailer() {
	var x = this;
	var y = select('.movie_trailer', x);
	var z = y.html();
	var zz = 'https://www.youtube.com/embed/' + z;
	var tr = select('.trailer');
	tr.removeClass('off');
	var iframe = createElement('iframe').addClass('trframe').parent(tr);
	iframe.attribute('src', zz);
	iframe.attribute('allowfullscreen', 'allowfullscreen');
}

