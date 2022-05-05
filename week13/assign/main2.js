var earth1 = [];
var solarFlare = [];
var magSphere = [];
wiggleP = 0.0;
wiggleA = 0.0;
grow = 0.0;


function setup() {
    createCanvas(600, 600)

    for (let i = 0; i < solarFlare.length; i++){
        solarFlare[i] = new Ion();
    };
    

    // earth array //
    for (let e = 0; e < 5; e++) {
        earth1[e] = new Mag();
    }
}

function draw() {
    background('white');

    // Earth's Magnetosphere //
    
   for (let e = 0; e < 5; e++) {
       push()
        earth1[e].move();
        translate(0,80)
        earth1[e].show();
        pop()
   }
//    earthMag = earth1[].radA;
    // // Ion Particles //
    f = new Ion(random(5,50), random(250,350));
    solarFlare.push(f);

    for (var i = solarFlare.length - 1; i >= 0; i--) {
        solarFlare[i].move();
        solarFlare[i].show();
        // if (solarFlare[i].intersects(earth1.rad)) {
        //     solarFlare[i].glowColor();
        // }
        if (solarFlare[i].finished()){
                solarFlare.splice(i,1);
        }
        // if (solarFlare[i].intersects(earth1.x,earth1.y)) {
        //     solarFlare[i].glowColor();
        // }
    }

     if (solarFlare[i].intersection(earth1[e])) {
            solarFlare[i].glowColor();
     }
}    


// trying to make a function to make arrays read eachother //
// function intersection(other) {
//     var d = dist(this.x, this.y, other.x, other.y);
//     if (d < this.radP + other.radA){
//         return true;
//      } else {
//         return false;
//      }
// }


class Ion {

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radP = 5;
        this.col = color(76, 237, 62);
    }

    finished() {
        return this.x > width;
    }

    move() {
        let m = sin(wiggleP);
        this.x = this.x + random(-1, 2);
        this.y = this.y + m + random(-4, 4);
        wiggleP += .01;
    }

    show() {
        noStroke();
        fill(this.col);
        circle(this.x , this.y, this.radP * 2);
        if (this.radP > 5) {
            this.radP = this.radP - .5;
        }
    }

    intersects = function(other) {
        var d = dist(this.x, this.y, other.x, other.y);
        if (d < this.radP + other.radA){
            return true;
        } else {
            return false;
        }
    }

    glowColor() {
        this.col = color(random(255),random(255),random(255));
    }

    pulse() {
        if (this.rad < 10) {
            this.rad = this.rad + 1;
        } 
    }
}

class Mag {
    constructor() {
        this.x = 500;
        this.y = 100;
        this.radA = 50;
        this.col = color('red');
        // this.e = sin(wiggleA)
    }

    
    move() {
        // rotate(wiggleA)
        // let e = sin(wiggleA);
        this.x = this.x + random(-3, 3);
        this.y = this.y + random(-3, 3);
        // wiggleA += -1 * random(.01, .05);
    }


    // Move with sin is Breaking the intersection //
    // move() {
        // translate(550, height/2)
        // rotate(wiggleA)
        // let e = sin(wiggleA);
        // this.x = this.x + e;
        // this.y = this.y + e ;
        // wiggleA += -1 * random(.01, .05);
    // }

    show() {
        noStroke();
        translate(0,80)
        fill(this.col);
        circle(this.x , this.y, this.radA * 2);
    } 
}