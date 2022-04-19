let c;
let xpos = 10;

function setup() {
	c = createCanvas(600, 500);
	noLoop();
}

function draw() {
	background(255);

	while (xpos < 600) {
      noStroke();
		fill(xpos/2, 0, 0);
		rect(10, xpos, 600, 380);
		xpos = xpos + 50;
	}

}
