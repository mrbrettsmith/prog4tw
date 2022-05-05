
var makeSigils = [];

function setup() {
    createCanvas(600, 600);
    
    
}

function draw() {
    background('grey');
    for (let i = 0; i < makeSigils.length; i++) {
// console.log(history[i])
        
    makeSigils[i].animate();
    makeSigils[i].show();
    }
}

// clean up terminator vs randoTerminus

function mousePressed(){
    var terminator = round(random(-100, 100),0);
    makeSigils.push(new Sigil(mouseX,mouseY,terminator));
}




