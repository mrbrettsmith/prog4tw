let makeCube = [];
let angle = 0;

function setup() {
    createCanvas(1000, 1000,)
    rectMode(CENTER);
    // makeCube = new Cube();
}

// Code modified from https://editor.p5js.org/enickles/sketches/SJN3lJaAQ - I am not sure why my squares never rotated around their centers! and I dont know why 'size' loop is working here:

function draw() {
    background(50, 11, 66);
    let size = 15;

    for (let r = size; r <= width - size; r += size * 2) {
      for (let d = size; d <= height - size; d += size * 2) {
        push();
        rectMode(CENTER);
        translate(r, d);
        // Spin faster towards side
        rotate(frameCount * (0.08) + (.5 * d + r));
        noStroke();
        fill(170, 8, 207);
        rect(0, 0, size + 4, size + 4);
        pop();
      }
      for (let r = size; r <= width - size; r += size * 2) {
        for (let d = size; d <= height - size; d += size * 2) {
          push();
          rectMode(CENTER);
          translate(r, d);
          // Spin faster towards side
          rotate(frameCount * (0.08) + (.25 * d + r));
          noStroke();
          fill(206, 69, 214);
          rect(0, 0, size - 2, size - 2);
          pop();
        }
      }
      for (let r = size; r <= width - size; r += size * 2) {
        for (let d = size; d <= height - size; d += size * 2) {
          push();
          rectMode(CENTER);
          translate(r, d);
          let c = cos(angle);
          // Spin faster towards side
          rotate(c * (1) + (.10 * d + r));
          noStroke();
          fill(224, 112, 194);
          rect(0, 0, size - 8, size - 8);
          pop();
        }
      }
    }
            
            // this.x = 0;
            // this.y = 0;
            // translate(15, 15)
            // // makes it swing
            // let c = cos(angle);
            // translate(this.x , this.y )
            // angle = angle + 0.01;
            // rotate(angle);
            // noStroke;
            // fill("red");
            
            // rect(this.x ,this.y , 20,20);

    // Code modified from https://editor.p5js.org/enickles/sketches/SJN3lJaAQ

    // for (let r = 0; r < 5; r++) {

    //     for (let d = 0; d < 5; d++) {
            
    //         push();
    //         this.x = 0;
    //         this.y = 0;
    //         rectMode(CENTER);
    //         translate(15, 15);
    //         angle = angle + 0.0001;
    //         rotate(angle);
    //         rect(this.x + r * 15 , this.y + d * 15, 7, 7);
    //         pop();

    //         // this.x = 0;
    //         // this.y = 0;
    //         // translate(this.x, this.y);
    //         // angle = angle + 0.01;
    //         // rotate(angle);
    //         // // makeCube;
    //         // noStroke;
    //         // fill("pink");
    //         // rectMode(CENTER);
    //         // rect(this.x + r * 15 , this.y + d * 15, 7, 7)

    //     }
        
    // }
    
}

// class Cube {

//     show() {
//         noStroke;
//         fill("pink");
//         rectMode(CENTER);
//         // rect(15, 15, 7, 7)
//         rect(15 + r * 15 , 15 + d * 15, 7, 7)
        
//     }

// }