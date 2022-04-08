
let leafo = [];



function setup() {
    createCanvas(600, windowHeight);
    background(100, random(255), 255);
  }

  function draw() {
    for (let l = 0; l < 7; l++) {
        grow = leafo[l];
        
    }
  }
class Leaf{
  leafo() {
     stroke("grey");
     strokeWeight(4);
     noFill();
     triangle(30, 75, 58, 20, mouseX, mouseY);
 }  
}
 