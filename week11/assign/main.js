

function setup() {
    createCanvas(1000, 1000)
    
}

function draw() {
    
    for (let i = 0; i < 10; i++) {
        line(50 + (i * 3), 50, 300 + (i *6), 500);
        stroke(100 + (i * 5), 150 + (i * 5), 100+ (i * 5));
    }
}


// I just dont get it! 

// function setup() {
//     createCanvas(1000, 1000)
//     var tail = createVector(60, 60);
//     var head = createVector(70, 70);
//     shoot = new Star(tail, head);
//     for (let i = 0; i < 5; i++) {
//         shoot[i] = new Star(tail, head);
//     }
// }

// function starMan( originX, originY) {
//     translate(originX, originY);
//     strokeWeight(1)
//     line(50, 50, 100, 100);

// }

// function Star(begin, end) {
//     this.show = function() {
//         stroke("red");
//         line(this.begin.x, this.begin.y, this.end.x, this.end.y);
        
//     }   
// }

// function draw() {
//     shift = 50;
//     for (let i = 0; i < 10 ; i++) {
//         Star(+ shift);    
//     }
    // shoot.show();
    // for (let s = 0; s < 5; s++) {
    //     for (let s = 0; s < 5; s++) {
    //         starMan(+10 , +5);
    //         strokeWeight( );
    //     }
        
    //     starMan(60,50 +10);
        
    // }
    // var fall = new starMan(width / 4, width / 2)
// }