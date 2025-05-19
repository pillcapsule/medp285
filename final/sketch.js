let words = ["Truth", "Bias", "Freedom"];
let index = 0;
let alpha = 0;

function setup() {
  createCanvas(windowWidth, 120).parent("p5-header-canvas").style("z-index", "0");
  textFont("Georgia");
  textSize(36);
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  clear();
  fill(166, 25, 46, alpha);
  text(words[index], width / 2, height / 2);

  alpha += 1.2;
  if (alpha > 255) {
    alpha = 0;
    index = (index + 1) % words.length;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, 120);
}

