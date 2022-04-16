let = instArray = [];
var button;

function preload() {
  soundFormats('mp3');
  instArray = [
      loadSound('sound/808kick.mp3'),
      loadSound('sound/darkhousenote.mp3'),
      loadSound('sound/frogBass.mp3'),
      loadSound('sound/loopmellophone.mp3'),
  ]
}

function setup(){
  button = createButton('play sound');
  button.mousePressed(randomFx);
}


function randomFx() {       
  random(instArray).play();
}

function draw() {
  // put drawing code here
}