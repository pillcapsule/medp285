function setup() {
  createCanvas(500, 500);
  background(210, 30, 95);
  colorMode(HSB);
  noStroke();
}

function draw() {
  fill(frameCount % 360, 80, 80, 0.5);
  ellipse(mouseX, mouseY, random(10, 50));
  
  if (frameCount % 200 === 0) {
    background(210, 30, 95);
  }
}
