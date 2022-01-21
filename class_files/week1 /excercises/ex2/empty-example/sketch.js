
const height = window.prompt('what is your favorite number? (1-100)')
const width = window.prompt('what is your least favorite number? (1-100)')
function setup() {
  createCanvas(800,800);
}

function draw() {
  if (mouseIsPressed) {
    fill(253, 106, 2);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, height, 80);
}