function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background(166, 231, 255);
 
  // Neck
  stroke(0);
  line(276, 257, 276, 162);
  
  // Antennae
  stroke(218,112,214);
  line(276, 155, 175, 112); // three
  line(276, 155, 306, 56); // four
  line(276, 155, 173, 120); // five
  line(276, 155, 315, 59); // two
  line(276, 155, 322, 65); // one
  line(276, 155, 172, 128); // six
 
  // body
  noStroke(0); // disable stroke
  fill(0); // set fill to gray
  ellipse(264, 377, 3, 33); // legs
  ellipse(250, 377, 3, 33); // legs
  fill(255,239,213); // set fill to black
  stroke(0)
  rect(219, 257, 90, 120); // main body
  stroke(0)
  fill(255,239,213); // set fill to black
  ellipse(276, 155, 45, 45); // head
  noStroke(0)
  fill(0); // set fill to black
  ellipse(285, 150, 3, 3); // nose
  fill(0); // set fill to light gray
  ellipse(263, 148, 5, 5); // small eye 1
  ellipse(296, 148, 4, 4); // small eye 2
  stroke(0);
  line(263, 160, 296, 160); // mouth

  // boobs
  stroke(222,184,135);
  fill(255, 239, 213);
  ellipse(250, 300, 20, 20);
  ellipse(280, 300, 20, 20);
  noStroke(0);
  rect(258, 286, 9, 28);
  stroke(0);
  fill(255, 66, 161);
  ellipse(250, 300, 5, 5);
  ellipse(280, 300, 5, 5);
  
  // arms
  stroke(0);
  line(219, 330, 200, 395);
  line(310, 330, 400, 300);

  // <3
  fill(0);
  ellipse(395, 270, 6, 6);
  ellipse(407, 270, 6, 6);
  triangle(401, 291, 411, 275, 390, 273);

  // sun
  stroke(255, 167, 0);
  fill(166, 231, 255);
  ellipse(600, 100, 75, 75);
  ellipse(600, 100, 60, 60);
  ellipse(600, 100, 45, 45);
  fill(255, 127, 0);
  ellipse(600, 100, 30, 30);
  
  
  // grass
  stroke(48,96,48);
  fill(103, 146, 103);
  rect(0, 400, 800, 200);

  // cloud one
  stroke(150);
  fill(300);
  ellipse(75, 290, 30, 30);
  ellipse(115, 245, 30, 30);
  ellipse(105, 285, 30, 30);
  ellipse(120, 270, 30, 30);
  ellipse(72, 248, 30, 30);
  ellipse(50, 275, 30, 30);
 
  // cloud two
  ellipse(410, 100, 20, 20);
  ellipse(430, 103, 20, 20);
  ellipse(440, 80, 20, 20);
  ellipse(445, 95, 20, 20);
  ellipse(415, 85, 20, 20);
  
  // cloud three
  ellipse(550, 300, 25, 25);
  ellipse(570, 285, 25, 25);
  ellipse(595, 275, 25, 25);
  ellipse(615, 295, 25, 25);
  ellipse(570, 320, 25, 25);
  ellipse(600, 315, 25, 25);
  
  // grass blades
  stroke(48,96,48);
  line(100, 445, 110, 430);
  line(110, 430, 115, 440);
  line(115, 440, 130, 420);
  line(130, 420, 140, 445);
  line(500, 420, 505, 410);
  line(505, 410, 510, 420);
  line(510, 420, 515, 413);
  line(515, 413, 520, 420);

  // ponytails
  noStroke();
  fill(0);
  ellipse(229, 139, 5, 7);
  ellipse(295, 109, 7, 5);

  // bird
  stroke(0);
  line(95, 50, 105, 45);
  line(105, 45, 115, 50);
  line(477, 262, 485, 260);
  line(485, 260, 495, 262);
}