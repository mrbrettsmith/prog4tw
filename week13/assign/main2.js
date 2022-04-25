var earth1;
var solarFlare = [];

wiggleP = 0.0;
wiggleA = 0.0;
grow = 0.0;

function setup() {
    createCanvas(600, 600)

    
    for (let i = 0; i < solarFlare.length; i++){
        solarFlare[i] = new Ion();
    };
        earth1 = new Mag();
    // }
}

function draw() {
    background('white');

    // earth1.move();
    earth1.show();
    
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
        }
    }


    // if (solarFlare.intersects(earth1)) {
    //         solarFlare.glowColor();
    // }
} 

class Ion {

    constructor() {
        this.x = 20;
        this.y = 300;
        this.rad = 5;
        this.col = color(76, 237, 62);
    }

    finished() {
        return this.x > width;
    }

    intersects = function(other) {
                var d = dist(this.x, this.y, other.x, other.y);
                if (d < this.rad + other.rad){
                    return true;
                } else {
                    return false;
                }
            }

    move() {
        
        this.x = this.x + random(-1, 4);
        this.y = this.y;
       
    }

    show() {
        noStroke();
        fill(this.col);
        circle(this.x , this.y, this.rad * 2);
    }

    glowColor() {
        this.col = color(random(255),random(255),random(255));
    }
}

class Mag {
    constructor() {
        this.x = 300;
        this.y = 300;
        this.rad = 100;
        this.col = color('red');
        
    }

    // move() {
        
    //     this.x = this.x ;
    //     this.y = this.y;
    
    // }

    show() {
        noStroke();
        fill(this.col);
        circle(this.x , this.y, this.rad * 2);
    } 
}

