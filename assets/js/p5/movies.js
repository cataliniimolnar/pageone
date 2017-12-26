function prepMovies() {
	var mov = m_data.movies;
	for (var i = 0; i < 3; i++) {
		var n = (floor(random(mov.length)));
		var mov_a = select('.movies_section');
		var mov_b = createElement('article');
		mov_b.addClass('movie');
		var mov_i = createImg(mov[n].poster,mov[n].title);
		
		
		
		mov_b.child(mov_i);
		
		mov_a.child(mov_b);
	}
	

}