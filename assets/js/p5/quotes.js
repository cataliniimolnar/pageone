function prepQuote() {
	var ppl = q_data.people;
	var n = (floor(random(ppl.length)));
	var x = (floor(random(39)));
	
	var ar = select('.intro_quote');
	ar.addClass('cl-' + x);
	var qu = createElement('h1', ppl[n].quote).parent(ar);
	var na = createElement('h3', ppl[n].name).parent(ar);

	quoteFadeIn();
}