var solarFlare = [];
grow = 0.0;
animate = 0.0;
wiggle = 0.0;

function setup() {
    createCanvas(600, 600)
}

function draw() {
    background('white');
    f = new Ion();
    solarFlare.push(f);
    for (let i = 0; i < solarFlare.length; i++) {
        solarFlare[i].move();
        solarFlare[i].show();
        if (solarFlare[i].intersects(solarFlare[i])) {
            solarFlare[i].glowColor();
            solarFlare[i].pulse();
        }

    }
    

}    

class Ion {

    constructor() {
        this.x = 20;
        this.y = 300;
        this.rad = 5;
        // this.intersects = function(other);
        this.col = color(76, 237, 62);
    }

    move() {
        let m = sin(wiggle);
        this.x = this.x + 3;
        this.y = this.y + m + random(-4, 4);
        wiggle += .01;
    }

    show() {
        noStroke();
        fill(this.col);
        circle(this.x , this.y, this.rad * 2);
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
        this.rad = this.rad + 5;
    }
}