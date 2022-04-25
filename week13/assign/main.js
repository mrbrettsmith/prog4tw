var solarFlare = [];
var magSphere = [];
wiggle = 0.0;
grow = 0.0;

function setup() {
    createCanvas(600, 600)
    
    for (let i = 0; i < solarFlare.length; i++){
        solarFlare[i] = new Ion();
    };

    for (let s = 0; s < 5; s++) {
        magSphere[s] = new Mag();
    }
    
}



function draw() {
    background('white');


    // Particles //
    // to make an ion push fountain (b):
    f = new Ion(random(5,50), random(250,350));
    // solarFlare.push(f);
    
    for (var i = 0; i < solarFlare.length; i++) {
        solarFlare[i].move();
        solarFlare[i].show();

        for (var j = 0; j < solarFlare.length; j++) {
            if (i != j && solarFlare[i].intersects(solarFlare[j])) {
            solarFlare[i].glowColor();
            // solarFlare[j].glowColor();
            solarFlare[i].pulse();
            }
        }
    }

    // Atmoshpere //
    for (let s = 0; s < 5; s++) {
        magSphere[s].move();
        magSphere[s].show();
    }
}    

class Ion {

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.rad = 5;
        this.col = color(76, 237, 62);
    }

    move() {
        let m = sin(wiggle);
        this.x = this.x + random(-1, 2);
        this.y = this.y + m + random(-4, 4);
        wiggle += .01;
    }

    show() {
        noStroke();
        fill(this.col);
        circle(this.x , this.y, this.rad * 2);
        if (this.rad > 5) {
            this.rad = this.rad - .5;
        }
    }

    intersects = function(other) {
        var d = dist(this.x, this.y, other.x, other.y);
        if (d < this.rad + other.rad){
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
        this.x = 700;
        this.y = 300;
        this.rad = 100;
        this.col = color(82, 148, 191, 100);
    }

    move() {
        let m = sin(wiggle);
        this.x = this.x ;
        this.y = this.y + m;
        wiggle += .01;
    }

    show() {
        noStroke();
        fill(this.col);
        circle(this.x , this.y, this.rad * 2);
    } 
}