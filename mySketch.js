let d = 0;
let x = 3;

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(255);
	fill(0);
	ellipse(windowWidth / 2, windowHeight / 2, d, d);
	d += x;
}

function keyPressed() {
	if (keyCode == 32) {
		x = -x;
	}
}
