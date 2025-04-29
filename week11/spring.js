
let centerX = 10;
let centerY = 5;
let radius = 50;
let rotation = -90;
let accelX = 45;
let accelY = 1;
let deltaX = 2;
let deltaY = 3;
let spring = 0.001;
let damping = 0.97;


let numNodes = 15;
let nodeStartX = [];
let nodeStartY = [];
let nodeX = [];
let nodeY = [];
let nodeAngle = [];
let nodeSpeed = [];


let squish = 10.0;

function setup() {
  createCanvas(700, 400);
  centerX = width / 2;
  centerY = height / 2;

  for (let i = 0; i < numNodes; i++) {
    nodeStartX[i] = 0;
    nodeStartY[i] = 0;
    nodeX[i] = 0;
    nodeY[i] = 0;
    nodeAngle[i] = 0;
    nodeSpeed[i] = random(4, 10);
  }

  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(20, 50);

  moveShape();
  drawShape();
}

function moveShape() {
  deltaX = mouseX - centerX;
  deltaY = mouseY - centerY;

  deltaX *= spring;
  deltaY *= spring;
  accelX += deltaX;
  accelY += deltaY;

  centerX += accelX;
  centerY += accelY;

  accelX *= damping;
  accelY *= damping;

  squish = 1 - (abs(accelX) + abs(accelY)) * 0.1;

  for (let i = 0; i < numNodes; i++) {
    nodeX[i] = nodeStartX[i] + sin(nodeAngle[i]) * (accelX * 3);
    nodeY[i] = nodeStartY[i] + sin(nodeAngle[i]) * (accelY * 3);
    nodeAngle[i] += nodeSpeed[i];
  }
}

function drawShape() {
  let tempRotation = rotation;

  for (let i = 0; i < numNodes; i++) {
    nodeStartX[i] = centerX + cos(tempRotation) * radius;
    nodeStartY[i] = centerY + sin(tempRotation) * radius;
    tempRotation += 360.0 / numNodes;
  }

  curveTightness(squish);
  fill(lerpColor(color('orange'), color('pink'), squish));

  beginShape();
  for (let i = 0; i < numNodes; i++) {
    curveVertex(nodeX[i], nodeY[i]);
  }
  endShape(CLOSE);
}
