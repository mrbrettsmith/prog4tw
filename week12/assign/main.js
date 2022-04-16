let bog1;
let bog2;
let bog3;
let bog4;
let button;
let slider;



function preload() {
  soundFormats('mp3');

  bog1 = loadSound('sound/808kick.mp3', loaded);
  bog2 = loadSound('sound/darkhousenote.mp3', loaded);
  bog3 = loadSound('sound/frogBass.mp3', loaded);
  bog4 = loadSound('sound/loopmellophone.mp3', loaded);

}
function setup(){
}


function togglePlay1() {
  if(!bog1.isPlaying()) {
    bog1.loop();
    button.html('pause');
  } else {
    bog1.pause();
    button.html('play');
  }
}
function togglePlay2() {
  if(!bog2.isPlaying()) {
    bog2.loop();
    button.html('pause');
  } else {
    bog2.pause();
    button.html('play');
  }
}
function togglePlay3() {
  if(!bog3.isPlaying()) {
    bog3.loop();
    button.html('pause');
  } else {
    bog3.pause();
    button.html('play');
  }
}
function togglePlay4() {
  if(!bog4.isPlaying()) {
    bog4.loop();
    button.html('pause');
  } else {
    bog4.pause();
    button.html('play');
  }
}

function loaded() {
  button1 = createButton(bog1);
  button1.mousePressed(togglePlay1);
  button2 = createButton(bog2);
  button2.mousePressed(togglePlay2);
  button3 = createButton(bog3);
  button3.mousePressed(togglePlay3);
  button4 = createButton(bog4);
  button4.mousePressed(togglePlay4);
}

function draw() {
  
}