var solarFlare = [];
wiggle = 0.0;

function setup() {
    createCanvas(600, 600)

    for (let i = 0; i < solarFlare.length; i++) {
        solarFlare[i] = new Ion(random(5,50), random(200,400));

    }
}

function draw() {
    background('white');

    f = new Ion();
    solarFlare.push(f);

    for (var i = 0; i < solarFlare.length; i++) {
        solarFlare[i].move();
        solarFlare[i].show();

        for (var j = 0; j < solarFlare.length; j++) {
            if (i != j && solarFlare[i].intersects(solarFlare[j])) {
            solarFlare[i].glowColor();
            // solarFlare[i].pulse();
            solarFlare[j].glowColor();
            
            }
    
        }
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
        this.x = this.x + 1 + random(-4, 4);
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
        if (this.rad < 20) {
            this.rad = this.rad + 5;
        } 
        
    }
}