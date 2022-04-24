let solarFlare = [];
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
    }


}    

class Ion {

    constructor() {
        this.x = 20;
        this.y = 300;
        this.diamiter = 5;
    }

    move() {
        let m = sin(wiggle);
        this.x = this.x + 3;
        this.y = this.y + m + random(-4, 4);
        wiggle += .01;
    }

    show() {
        noStroke();
        fill('green');
        circle(this.x , this.y, this.diamiter);
        
    }

}