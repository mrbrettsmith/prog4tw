let earth1;
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
    
    // earth array (broken) //
        earth1 = new Mag();
  
}

function draw() {
    background('black');

    // Earth's Magnetosphere //
    push()
    earth1.move();
    earth1.show();
    pop()

    // Ion Particles //
    f = new Ion(random(5,50), random(250,350));
    solarFlare.push(f);

    for (var i = solarFlare.length - 1; i >= 0; i--) {
        solarFlare[i].move();
        solarFlare[i].show();
       
        if (solarFlare[i].finished()){
                solarFlare.splice(i,1);
        }

        if (solarFlare[i].intersects(earth1)) {
            solarFlare[i].glowColor();
            solarFlare[i].pulse();
        }
    }
    // Ion Particles Fade //
    if (this.rad > 5) {
        this.rad = this.rad + 1;
    } 
}    


class Ion {

    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radP = 5;
        this.amp = 0;
        this.col = color(76, 237, 62, this.amp);
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
        if (this.radP > 0) {
            this.radP = this.radP - .008;
        }
        if (this.amp > 10) {
            this.amp = this.amp - 1;
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
        this.col = color(76, 237, 62, this.amp + 30);
    }

    pulse() {
        // this.radP = this.radP + 1.5;
        if (this.radP < 10) {
            this.radP = this.radP +5;
        } 
    }
}

class Mag {
    constructor() {
        this.x = 75;
        this.y = 450;
        this.radA = 50;
        this.col = color(76, 237, 62, 5);
        // this.e = sin(wiggleA)
    }

    // Move is Breaking the intersection //
    move() {
        // translate(550, height/2)
        // rotate(wiggleA)
        let e = sin(wiggleA) * 7.;
        this.x = this.x + random(-4,4);
        this.y = this.y + e ;
        wiggleA += -1 * random(.03, .06);
    }

    show() {
        noStroke();
        fill(this.col);
        circle(this.x , this.y, this.radA * 2);
    } 
}