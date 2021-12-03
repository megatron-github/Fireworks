let fireworks = [];
let stars = [];
let gravity;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	colorMode(HSB);
	// put setup code here
	gravity = createVector(0, 0.2);
	for (let i = 0; i < 80; i++) {
		stars.push(new Star());
	}
}


function draw() {

	colorMode(RGB);
	for(let i = stars.length; 0 < i; i--) {
		stars[i - 1].update();
		stars[i - 1].show();
		if (stars[i - 1].out_of_scope()) {
			stars.splice(i , 1);
			stars.push(new Star());
		}
	}
	background(0, 0, 0, 25);
	// put drawing code here
	// 10% chance of having a firework per frame
	if (random(1) < 0.10) {
		fireworks.push(new Firework());
	}
	for(let i = fireworks.length; 0 < i; i--) {
		fireworks[i - 1].update();
		fireworks[i - 1].show();
		if (fireworks[i - 1].burned()) {
			fireworks.splice(i , 1);
		}
	}
}

function windowResized() {
	resizeCanvas(window.innerWidth, window.innerHeight);
	background(0);
}
