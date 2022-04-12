let makeDot = [];

function setup(){
    createCanvas(1000, 1000);
    r = 5;
    // makeDot[d] = new Dot(this.x, this.y, this.r);
    for (let d = 0; d < 49; d++) {
        let x = 10 + 20 * d;
        let y = 10 + 20 * d;
        makeDot[d] = new Dot (x, y, r);
       
        
        // makeDot[this.x, this.y, this.r].show();
    };
}
    
function draw(){
    for (let d = 0; d < makeDot.length; d++) {
        
        makeDot[d].show();
        
    }

    // for (let d = 0; d < 49; d++) {
    //     makeDot[this.x, this.y, this.r].show();
    //     // for (let y = 0; y < 49; y++) {
    //     //     makeDot[this.x, this.y, this.r].show();
    //     // }
    // }
}

function mouseOver() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < this.r) {
             r = r + random(1.5, 5);}
    }

    

class Dot {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    show() {
        ellipse(this.x , this.y, this.r * 2);
    }
}
    // function swell() {
    //     diamater = diamater + random(1.5, 5);
    //     time(30);
    // }


   
