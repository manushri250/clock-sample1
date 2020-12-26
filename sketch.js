var hr;
var mn;
var sc;
var scAngle, mnAngle, hrAngle;


function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black"); 
  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);

  push();
  
  //green
  rotate(mnAngle);
  angleMode(DEGREES);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(200, 200, 100, 200);

  //blue
  rotate(hrAngle);
  angleMode(DEGREES);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(200, 200, 150, 160);

  // Red 
  rotate(scAngle);
  angleMode(DEGREES);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(200, 200, 100, 300);

  
  pop();

  drawSprites();
}