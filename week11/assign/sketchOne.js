
function setup() {
    createCanvas(1000, 1000)
    
}
function draw() {
  
    for (let c = 0; c < 255; c++) {
        
        for (let x = 0; x < width; x += 100) {
            // stroke(1 + (x * .5), 245, 66);
            
            for (let y = 0; y < width; y += 100) {
                stroke( x * .25, 1 + y * .25, 66);
                strokeWeight(2 + (y / 185));
                // division reverses first line 

                if (x > 0 && x < 700 && y > 0 && y < 1000) {
                line(x / 2, y, x + 50, y + 50);
                line(x + 30 + (x * .5), y + (y * .1), x - 30, y - (y * .2)); }
                // var shrinkY = y * random(-.1,.1);       
            };
        };    
    };

    noLoop()
}


// function swerve() {
   
//     flex = flex + 50;
    // if (flex == capsule.length);
    // flex = flex - 1;
    // if (flex == 0)
    // flex = flex +1;
// }

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