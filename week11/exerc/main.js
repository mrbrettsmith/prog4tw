
let grow = [];

function setup() {
    createCanvas(600, windowHeight, WEBGL);
    background(100, random(255), 255);
    grow = new Leaf();
    }

function draw() {
    for (let l = 0; l < 7; l++) {
        grow[l].bloom();
    }
  }

class Leaf{
    constructor() {
        this.x = 100
        this.y = 100
    }

    // bud() {
    //     this.x = this.x + 75;
    //     this.y = this.y + random(-5, 5);
    // }

    bloom() {
        stroke("green");
        strokeWeight(3);
        noFill();
        triangle(this.x -25, this.y, this.x +25, this.y, this.x + random(-25, +25), this.y +100);
    }
}
 