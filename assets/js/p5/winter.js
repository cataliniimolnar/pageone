// snow
let snow = [];
let gravity;
let zOff = 0;
let textures = [];
let xr = 0;

function prepWinter() {
    if (spritesheetLoaded) { 
        if (isMobile) {
            xr = floor(random(750, 150));
        } else 
        {
            xr = floor(random(200, 300));
        }
        gravity = createVector(0, 0.03);
        for (let x = 0; x < spritesheet.width; x+=32) {
            for (let y = 0; y < spritesheet.height; y+=32) {
                let img = spritesheet.get(x, y, 32, 32);
                textures.push(img);
                image(img, x, y);
            }
        }
        for (let i = 0; i < xr; i++) {
            let x = random(width);
            let y = random(height);
            let design = random(textures);
            snow.push(new SnowFlake(x, y, design));
        }
    }
}

function drawWinter() {
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