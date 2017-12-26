var url = 'https://rawgit.com/cataliniimolnar/json_data/master/qts.json';
var data;

function preload(){
	data = loadJSON(url);
}

function setup() {
	noCanvas();
	var ppl = data.people;
	var n = (floor(random(ppl.length)));
	
	var ar = select('.intro_quote');
	var qu = createElement('h1', ppl[n].quote);
	var na = createElement('h3', ppl[n].name);
	
	ar.child(qu);
	ar.child(na);
	
	var x = (floor(random(39)));
	ar.addClass('cl-' + x);	
	
}