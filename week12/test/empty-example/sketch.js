let soundArray = [];
var button;

function preload() {
    // soundFormats('mp3');
    soundArray = [
        loadSound('sample/compOne.mp3'),
        loadSound('sample/compTwo.mp3'),
        loadSound('sample/compThree.mp3'),
        loadSound('sample/compFour.mp3'),
    ]
}

function setup(){
    createCanvas(600, 600);
    button = createButton('Click to Compute');
    button.mousePressed(randomFx);
}

function randomFx() {       
    random(soundArray).play();
}

function draw(){
background("black")
}
