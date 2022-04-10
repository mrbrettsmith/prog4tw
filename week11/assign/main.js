

function setup() {
    createCanvas(1000, 1000)
    var tail = createVector(60, 60);
    var head = createVector(70, 70);
    shoot = new Star(tail, head);
}

// function starMan( originX, originY) {
//     translate(originX, originY);
//     strokeWeight(1)
//     line(50, 50, 100, 100);

// }

function Star(begin, end) {
    this.begin = begin;
    this.end = end;
    this.show = function() {
        stroke("red");
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }   
}

function draw() {
    shoot.show();
    // for (let s = 0; s < 5; s++) {
    //     for (let s = 0; s < 5; s++) {
    //         starMan(+10 , +5);
    //         strokeWeight( );
    //     }
        
    //     starMan(60,50 +10);
        
    // }
    // var fall = new starMan(width / 4, width / 2)
}