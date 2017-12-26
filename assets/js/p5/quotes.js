function prepQuote() {
	var ppl = q_data.people;
	var n = (floor(random(ppl.length)));
	var ar = select('.intro_quote');
	var qu = createElement('h1', ppl[n].quote);
	var na = createElement('h3', ppl[n].name);
	ar.child(qu);
	ar.child(na);
	var x = (floor(random(39)));
	ar.addClass('cl-' + x);

	var m_btn = select('#home_btn');
	m_btn.addClass('cl-' + x);
}