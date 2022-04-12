function setup(){
createCanvas(1000, 1000)
}
    
function draw(){
    r = 10;
    makeDot = new Dot;
    for (let x = 0; x < 49; x++) {
        for (let y = 0; y < 49; y++) {
            makedot[x];
        }
    }
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


   
