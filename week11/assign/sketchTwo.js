function setup(){
createCanvas(1000, 1000)
}
    
function draw(){

    var diamater = 10;
    
    for (let x = 0; x < 49; x++) {
        for (let y = 0; y < 49; y++) {
            ellipse(20+ x * 20, 20+ y * 20, diamater, diamater); 
        }
    }

   
    }    
}
