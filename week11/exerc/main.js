
let holePunch = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    background(100, random(255), 255);
    for (let i = 0; i < 100; i++) {
        holePunch[i] = new Hole();
        
    }
}
    
function draw() {
    stroke(mouseX, mousey, 100,)
    for (let i = 0; i < 15; i++) {
        
        
    }
}



// let makeLeaf = [];
// // let point1 = {
// //     a: mouseX, 
// //     b: mouseY
// // }

// // let point2 = 
// // let point3 =

// function setup() {
//     createCanvas(windowWidth, windowHeight, WEBGL);
//     background(100, random(255), 255);
//     makeLeaf = new Sprout();
//     for (let i = 0; i < 10; i++) {
//         makeLeaf[i].leaf();
        
//     }
//     }

// class Sprout {
//     leaf() {
//         stroke("pink");
//         strokeWeight(3)
//         noFill()
//         triangle(100, 100, 200, 100, 150,200)
//     }
// }

// function draw() {
// }




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