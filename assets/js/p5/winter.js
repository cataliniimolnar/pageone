//quotes
var q_url = 'https://rawgit.com/cataliniimolnar/json_data/master/qts.json';
var q_data;

//movies
var m_url = 'https://cdn.rawgit.com/cataliniimolnar/json_data/master/mdb.json';
var m_data;

// snow
let snow = [];
let gravity;

let zOff = 0;

let spritesheet;
let textures = [];

function preload(){
    q_data = loadJSON(q_url);   // quotes
    m_data = loadJSON(m_url);   // movies

    spritesheet = loadImage('media/f32.png');
}


function setup(){
    createCanvas(windowWidth, windowHeight);
    gravity = createVector(0, 0.03);
    for (let x = 0; x < spritesheet.width; x+=32) {
        for (let y = 0; y < spritesheet.height; y+=32) {
            let img = spritesheet.get(x, y, 32, 32);
            textures.push(img);
            image(img, x, y);
        }
    }
    
    let xr = random(450, 600);
    for (let i = 0; i < xr; i++) {
        let x = random(width);
        let y = random(height);
        let design = random(textures);
        snow.push(new SnowFlake(x, y, design));
    }
    
    //prepare quote
    prepQuote();
    prepMovies();
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