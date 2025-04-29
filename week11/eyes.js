function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
    angleMode(DEGREES);
  
  }
  
  function draw() {
    background(0);
  
   
    let eyeLX = 135;
    let eyeLY = 190;
    let angleL = atan2(mouseY - eyeLY, mouseX - eyeLX);
  
    push();
    translate(eyeLX, eyeLY);
    rotate(angleL);
    fill(200, 100, 100); 
    rectMode(CENTER);
    rect(0, 0, 55, 55); 
    fill(0);
    rect(14, 0, 18, 18); 
    pop();
  
    
    let eyeRX = 265;
    let eyeRY = 190;
    let angleR = atan2(mouseY - eyeRY, mouseX - eyeRX);
  
    push();
    translate(eyeRX, eyeRY);
    rotate(angleR);
    fill(40, 100, 100);
    triangle(-28, 30, 28, 30, 0, -30); 
    fill(0);
    triangle(-9, 10, 9, 10, 0, -10); 
    pop();
  }