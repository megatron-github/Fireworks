var fireworks = [];
var stars = [];
var gravity;

function setup() {

	createCanvas(windowWidth, windowHeight);
	// background(0);
	stroke(255);
	colorMode(HSB);

	// put setup code here
	gravity = createVector(0, 0.2);	

	for (let i = 0; i < 80; i++) {
		stars.push(new Star());
	}

}


function draw() {

	// colorMode(RGB);
	background(0, 0, 0, 20);
	// put drawing code here
	// 10% chance of having a firework per frame
	if (random(1) < 0.10) {
		fireworks.push(new Firework());
	}
	for(var i = fireworks.length; 0 < i; i--) {
		fireworks[i - 1].update();
		fireworks[i - 1].show();
		if (fireworks[i - 1].burned()) {
			fireworks.splice(i , 1);
		}
	}
	for(var i = stars.length; 0 < i; i--) {
		stars[i - 1].update();
		stars[i - 1].show();
		if (stars[i - 1].out_of_scope()) {
			stars.splice(i , 1);
			stars.push(new Star());
		}
	}
}
