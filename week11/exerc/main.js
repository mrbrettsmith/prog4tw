let makeLeaf = [];
// let point1 = {
//     a: mouseX, 
//     b: mouseY
// }

// let point2 = 
// let point3 =

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(100, random(255), 255);
    makeLeaf = new leaf();
    mousePressed 
    }

function leaf() {
    stroke("pink");
    strokeWeight(3)
    noFill()
    triangle(mouseX, mouseY, 200, 100, 150,200)
}

function draw() {
    triangle(mouseX, mouseY, 200, 100, 150,200)
    // for (let i = 0; i < 7; i++) {
    //     makeLeaf[i];
    // }
}

function mousePressed() {
    makeLeaf;
}

// class Grow {
//     leaf() {
//         stroke("pink");
//         triangle(100, 100, 200, 100, 150,200)

// }
// }
// let grow = [];



// function setup() {
//     createCanvas(windowWidth, windowHeight, WEBGL);
//     background(100, random(255), 255);
//     grow = new Leaf();
//     }

// function draw() {
//     for (let l = 0; l < 7; l++) {
//         grow[l].bloom();
//     }
//   }

// class Leaf{
//     constructor() {
//         this.x = 100
//         this.y = 100
//     }

//     bud() {
//         this.x = this.x + 75;
//         this.y = this.y + random(-5, 5);
//     }

//     bloom() {
//         stroke("green");
//         strokeWeight(3);
//         noFill();


//         triangle(this.x -25, this.y, this.x +25, this.y, this.x + random(-25, +25), this.y +100);
//     }
// }