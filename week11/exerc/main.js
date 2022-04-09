
function setup() {
    createCanvas(windowWidth, windowHeight, 
    WEBGL);
    background(100, random(255), 255);
    }

    
function draw() {
    
    
    for (let g = 0; g < 6; g++) {
        this.angle = 360;
        this.color = 100;
        rotate(this.angle + 10)
        translate(50,10);
        
        for (let w = 0; w < PI; w++) {
            rotate(this.angle + 5);
            translate(100,5);

            for (let i = 0; i < PI; i++) {
                this.x = 10;
                this.y = 10;
                this.thick = 2;
                strokeWeight( this.thick + 1);
                stroke(mouseX + 5, this.color + 10, 100,);
                noFill();
                triangle(this.x, this.y + 10, 200, 100, 150, 200);
                translate(5, 1);
            }
        }
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