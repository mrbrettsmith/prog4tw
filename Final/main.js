var drawArray = [];
var sigilArray1 = []
var terminator;
var transferX;
var transferY;

let clickTally = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER)
    randomSigil = floor(random(0,5));
}

function draw() {
    background('grey');
    fill('white')
    textFont('helvetica')
    textAlign(CENTER)
    textSize(18)
    text('~ Left Click to Draw a Sigil ~',width/2,100
     )
    // All sigil componants land in this array //
    for (let i = 0; i < sigilArray1.length; i++) {        
        sigilArray1[i].animate();
        sigilArray1[i].show();
    }     
}


function mousePressed(){
    let allSigils = [Sigil1, Sigil2, Sigil3, Sigil4, Sigil5, Sigil6, Sigil7, Sigil11, Sigil12, Sigil16];

    // additional shapes //
    // Sigil12, Sigil13, Sigil14, Sigil15,

    var chosenSig = random(allSigils);
    let chosenColor;
    // var chosenColor = color(random(1, 255),random(1, 255),random(1, 255))
    var terminator = round(random(-100, 100),0);
    let makeSigils1;
    

    if (clickTally === 0){
        var terminator = round(random(-100, 100),0);
        chosenColor = color(random(1, 255),random(1, 255),random(1, 255));
        let makeSigils1 = new chosenSig(mouseX,mouseY,terminator,chosenColor);
        sigilArray1.push(makeSigils1);
    } else if (clickTally !== 0){
        var terminator = round(random(-100, 100),0);
        let makeSigils1 = new chosenSig(transferX, transferY, terminator, chosenColor);
        sigilArray1.push(makeSigils1);
    } 

    clickTally = clickTally + 1;
    console.log('clickTally', clickTally) 
    console.log ( 'Random Sigil', chosenSig)
    console.log('Terminator', terminator)
    // console.log ( 'Sigil Color', chosenColor)
}



