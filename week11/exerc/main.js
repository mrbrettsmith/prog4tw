
let grow = [];

function setup() {
    createCanvas(600, windowHeight, WEBGL);
    background(100, random(255), 255);
    
  }




  function draw() {
    for (let l = 0; l < 7; l++) {
        grow = new Leaf();
        // grow[l].bud();
        grow[l].bloom();
    }
  }


class Leaf{
    constructor() {
        this.x = 100
        this.y = 100
        this.width = 100;
        this.height = 80;
    }

    // bud() {
    //     this.x = this.x + 75;
    //     this.y = this.y + random(-5, 5);
    // }

    bloom() {
        stroke("pink");
        strokeWeight(7);
        noFill();
        ellipse(this.x, this.y, this.width, this.height);
    }
}
 