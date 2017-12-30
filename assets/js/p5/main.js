var mc;
var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i.test(navigator.userAgent);

// quotes
var q_url = 'https://rawgit.com/cataliniimolnar/json_data/master/qts.json';
var q_data;
var quotesLoaded = false;
// movies
var m_url = 'https://rawgit.com/cataliniimolnar/json_data/master/mdb.json';
var m_data;
var moviesLoaded = false;
// snowflakes spritesheet
let spritesheet;
var spritesheetLoaded = false;

function preload(){
    q_data = loadJSON(q_url, quotesReady);
    m_data = loadJSON(m_url, moviesReady);
    spritesheet = loadImage('media/f32.png', spritesReady);
    //spritesheet = loadImage('https://cataliniimolnar.github.io/pageone/media/f32.png', spritesReady);
}

function quotesReady(quotes){ if (quotes) {quotesLoaded = true;} }
function moviesReady(movies){ if (movies) {moviesLoaded = true;} }
function spritesReady(sprites){ if (sprites) {spritesheetLoaded = true;} }

function setup(){
    mc = createCanvas(windowWidth, windowHeight).addClass('maincanvas');
    if (spritesheetLoaded) { prepWinter(); }
    if (quotesLoaded) { prepQuote(); }
    if (moviesLoaded) { prepMovies(); }
}


function draw(){
    background(7);
    drawWinter();
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}