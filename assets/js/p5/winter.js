var isMobile = /iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i.test(navigator.userAgent);

// quotes
var q_url = 'https://rawgit.com/cataliniimolnar/json_data/master/qts.json';
var q_data;

// movies
var m_url = 'https://rawgit.com/cataliniimolnar/json_data/master/mdb.json';
var m_data;

// snow
let snow = [];
let gravity;

let zOff = 0;

let spritesheet;
let textures = [];

var r1 = false;
var r2 = false;
var r3 = false;

var c1;

function preload(){
    // quotes
    q_data = loadJSON(q_url, quotesReady);
    // movies
    m_data = loadJSON(m_url, moviesReady);
    // snowflakes spritesheet
    //spritesheet = loadImage('media/f32.png', spritesReady);
    spritesheet = loadImage('https://alca.tv/static/f32.png', spritesReady);
}

function quotesReady(){
    r1 = true;
    }
function moviesReady(){
    r2 = true;
    }
function spritesReady(){
    r3 = true;
    }


function setup(){
    if (r1) {
        prepQuote();
    }
    if (r2) {
        prepMovies();
    }
    if (r3) {
        c1 = createCanvas(windowWidth, windowHeight).addClass('maincanvas');
        gravity = createVector(0, 0.03);
        for (let x = 0; x < spritesheet.width; x+=32) {
            for (let y = 0; y < spritesheet.height; y+=32) {
                let img = spritesheet.get(x, y, 32, 32);
                textures.push(img);
                image(img, x, y);
            }
        }
        let xr = 0;
        if (isMobile) {
            xr = floor(random(100, 200));
        } else {
            xr = floor(random(350, 500));
        }
        for (let i = 0; i < xr; i++) {
            let x = random(width);
            let y = random(height);
            let design = random(textures);
            snow.push(new SnowFlake(x, y, design));
        }
        mainCanvasFadeIn();
    }
    
    
}


function draw(){
    background(34);
    zOff += 0.01;
    for (flake of snow) {
        let xOff = flake.pos.x / width;
        let yOff = flake.pos.y / height;
        let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
        let wind = p5.Vector.fromAngle(wAngle);
        wind.mult(0.02);
        flake.applyForce(gravity);
        flake.applyForce(wind);
        flake.update();
        flake.render();
    }
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}