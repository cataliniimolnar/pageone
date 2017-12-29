function prepQuote() {
	var ppl = q_data.people;
	var n = (floor(random(ppl.length)));
	var body = select('body');
	var d = createElement('div').addClass('quote').parent(body);
	var d_q = createElement('h3', ppl[n].quote).parent(d);
	var d_n = createElement('small', ppl[n].name).parent(d);
		
	showHideQuote();
	}